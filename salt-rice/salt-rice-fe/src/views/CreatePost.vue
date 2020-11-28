<template>
  <section id="createPost">
    <h1>Create new posts</h1>
    <form @submit="submit">
      <label for="title">Title</label>
      <input
        id="title"
        v-model="title"
        autocomplete="off"
        name="title"
        placeholder="Enter Post's title.."
        required
        type="text"
      />
      <label for="message">Message</label>
      <textarea
        id="message"
        v-model="message"
        autocomplete="off"
        cols="30"
        placeholder="Enter your message here.."
        required
        rows="10"
      ></textarea>
      <label for="category">Category</label>
      <select id="category" v-model="category" name="category">
        <option
          v-for="category in categories"
          :key="category.categoryId"
          :value="category.categoryId"
        >
          {{ category.categoryName }}
        </option>
      </select>
      <label for="tags">Tags</label>
      <input
        id="tags"
        ref="tagInput"
        autocomplete="off"
        name="tags"
        placeholder="Enter tags followed by space..."
        type="text"
        @input="
          (e) => {
            addTag(e.target.value, e);
            recommendTag(e.target.value);
          }
        "
      />
      <div v-show="tagSuggestions.length" class="tag-suggestion">
        <ul>
          <li
            v-for="suggestion in tagSuggestions"
            :key="suggestion.tagID"
            @click="addTag(`${suggestion.tagName},`)"
          >
            {{ suggestion.tagName }}
          </li>
        </ul>
      </div>
      <button
        v-for="tag in tags"
        :key="tag"
        class="tag-button margin-bottom"
        @click="(e) => e.preventDefault()"
      >
        #{{ tag }}
        <span @click="removeTag(tag)">x</span>
      </button>
      <br/>
      <label for="isAnonymous">
        Post anonymously
      </label>
      <input v-model="isAnonymous" type="checkbox" id="isAnonymous"/>
      <div class="button-group">
        <router-link class="cancel-button" tag="button" to="/" type="button"
          >Cancel</router-link
        >
        <button class="draft-button" type="button" @click="draft">
          Save as draft
        </button>
        <button class="submit-button margin-left-responsive" type="submit">
          Post
        </button>
      </div>
    </form>
  </section>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      error: false,
      title: "",
      message: "",
      category: 1,
      timeoutTag: null,
      tagSuggestions: [],
      tags: [],
      isAnonymous: false,
    };
  },
  methods: {
    async submit(e) {
      try {
        e.preventDefault();
        if (!e.isTrusted) return;
        if (!this.title) return;
        if (!this.message) return;
        if (!this.category) return;

        this.addTag(this.$refs.tagInput.value);
        const response = await (
          await fetch(`${process.env.VUE_APP_BASE_API}/post`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              title: this.title,
              body: this.message,
              categoryID: Number(this.category), // category will be dynamic once I get all categories from server
              authorID: 1, // authentication have not been implemented yet, just putting 1 for now
              isAnonymous: this.isAnonymous,
              tags: this.tags.map((tagName) => ({ tagName })),
            }),
          })
        ).json();

        // put 500 page error when true
        if (response.errno) this.error = true;
        else await this.$router.push(`/post/${response.insertId}`);
      } catch (err) {
        console.error(err);
      }
    },
    draft() {
      // todo: send draft to server... Or save to localstorage?
    },
    addTag(tag) {
      const value = tag.split(/,|\s/)[0];

      if (!(tag[tag.length - 1] === "," || tag[tag.length - 1] === " ")) return;
      if (!value) return;

      this.$refs.tagInput.value = "";
      this.recommendTag("");
      this.tags = [...new Set([...this.tags, value])];
    },
    removeTag(tag) {
      this.tags.splice(
        this.tags.findIndex((e) => e === tag),
        1
      );
    },
    recommendTag(tag) {
      const value = tag.split(/,|\s/)[0];
      if (!tag || !value) return (this.tagSuggestions = []);

      clearTimeout(this.timeoutTag);
      this.timeoutTag = setTimeout(async () => {
        try {
          const response = await (
            await fetch(`${process.env.VUE_APP_BASE_API}/tag/byname/${value}`)
          ).json();

          // put 500 page error when true
          if (response.errno) this.error = true;
          this.tagSuggestions = Object.freeze(response);
        } catch (err) {
          console.error(err);
        }
      }, 500);
    },
  },
  computed: {
    categories() {
      // get categories from server
      return [
        { categoryId: 1, categoryName: "Reflections" },
        { categoryId: 2, categoryName: "Family-Children" },
        { categoryId: 3, categoryName: "Growing Old" },
        { categoryId: 4, categoryName: "Health" },
        { categoryId: 5, categoryName: "Mental Health" },
        { categoryId: 6, categoryName: "Dating" },
        { categoryId: 7, categoryName: "Food Recipes" },
        { categoryId: 8, categoryName: "Past time/Passion" },
        { categoryId: 9, categoryName: "Professional Work/Occupation" },
      ];
    },
  },
};
</script>

<style lang="scss">
section#createPost {
  padding: side-space(mobile-mini) side-space(mobile);
  text-align: justify;

  @include layout(tablet) {
    padding: side-space(mobile);
  }

  @include layout(pc) {
    padding: side-space(mobile) side-space(pc);
  }

  h1 {
    font-size: 26px;
    font-weight: 900;
    margin-bottom: 1cm;
  }

  .cancel-button {
    float: left;
  }

  textarea{
    resize: vertical;
  }
}
</style>
