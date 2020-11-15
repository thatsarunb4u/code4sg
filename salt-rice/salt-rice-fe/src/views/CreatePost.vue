<template>
  <div>
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
          style="resize: vertical;"
      ></textarea>
      <label for="category">Category</label>
      <select id="category" v-model="category" name="category">
        <option v-for="category in categories" :key="category.categoryId" :value="category.categoryId">{{ category.categoryName }}</option>
      </select>
      <label for="tags">Tags</label>
      <input
          id="tags"
          ref="tagInput"
          autocomplete="off"
          name="tags"
          placeholder="Enter tags followed by space..."
          type="text"
          @input="(e) => {addTag(e.target.value, e); recommendTag(e.target.value);}"
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
      <button v-for="tag in tags" :key="tag" class="tag-button" @click="e => e.preventDefault()">
        #{{ tag }}
        <span @click="removeTag(tag)">x</span>
      </button>
      <label style="display: block; margin-top: 5px;">
        Post anonymously
        <input v-model="isAnonymous" type="checkbox"/>
      </label>
      <div class="button-group">
        <router-link class="cancel-button" style="float: left;" tag="button" to="/" type="button">Cancel</router-link>
        <button class="draft-button" type="button" @click="draft">Save as draft</button>
        <button class="submit-button" type="submit">Post</button>
      </div>
    </form>
  </div>
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
      isAnonymous: false
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
        const response = await (await fetch(`${process.env.VUE_APP_BASE_API}/post`, {
          method: "POST",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({
            title: this.title,
            body: this.message,
            categoryID: Number(this.category), // category will be dynamic once I get all categories from server
            authorID: 1, // authentication have not been implemented yet, just putting 1 for now
            isAnonymous: this.isAnonymous,
            tags: this.tags.map((tagName) => ({ tagName }))
          })
        })).json();

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
      this.tags.splice(this.tags.findIndex((e) => e === tag), 1);
    },
    recommendTag(tag) {
      const value = tag.split(/,|\s/)[0];
      if (!tag || !value) return this.tagSuggestions = [];

      clearTimeout(this.timeoutTag);
      this.timeoutTag = setTimeout(async () => {
        try {
          const response = await (await fetch(`${process.env.VUE_APP_BASE_API}/tag/byname/${value}`)).json();

          // put 500 page error when true
          if (response.errno) this.error = true;
          this.tagSuggestions = Object.freeze(response);
        } catch (err) {
          console.error(err);
        }
      }, 500);
    }
  },
  computed: {
    categories() {
      // get categories from server
      return [
        {"categoryId": 1, "categoryName": "Reflections"},
        {"categoryId": 2, "categoryName": "Family-Children"},
        {"categoryId": 3, "categoryName": "Growing Old"},
        {"categoryId": 4, "categoryName": "Health"},
        {"categoryId": 5, "categoryName": "Mental Health"},
        {"categoryId": 6, "categoryName": "Dating"},
        {"categoryId": 7, "categoryName": "Food Recipes"},
        {"categoryId": 8, "categoryName": "Past time/Passion"},
        {"categoryId": 9, "categoryName": "Professional Work/Occupation"}
      ];
    }
  }
};
</script>

<style scoped>
div {
  padding: 0 2em calc(1.5em * 2) 2em;
  text-align: justify;
}

h1 {
  font-size: 26px;
  font-weight: 900;
  margin-bottom: 1cm;
}

label {
  font-weight: 900;
  font-size: large;
}

input[type=text], textarea, select {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
  font: 1em/1.25em Arial, Montserrat, sans-serif;
}

input::placeholder, textarea::placeholder {
  font-family: "Montserrat", sans-serif;
  font-size: 16px;
}

input[type=checkbox] {
  height: 20px;
  width: 20px;
  margin-left: 10px;
}

.tag-suggestion {
  padding: 10px;
  box-shadow: 0 2.8px 2.2px rgba(0, 0, 0, 0.034),
  0 6.7px 5.3px rgba(0, 0, 0, 0.048),
  0 12.5px 10px rgba(0, 0, 0, 0.06),
  0 22.3px 17.9px rgba(0, 0, 0, 0.072),
  0 41.8px 33.4px rgba(0, 0, 0, 0.086);
  min-height: 90px;
  background: white;
  position: relative;
  margin-top: -20.5px;
  border-radius: 0 0 10px 10px;
}

.tag-suggestion ul {
  padding-left: 0;
  list-style-type: none;
}

.tag-suggestion ul li {
  padding: 5px 15px;
  cursor: pointer;
}

.tag-suggestion ul li:hover {
  background-color: #eee;
}

.button-group {
  padding-top: 5%;
  text-align: end;
}

.button-group button {
  margin: 0 10px;
}
</style>
