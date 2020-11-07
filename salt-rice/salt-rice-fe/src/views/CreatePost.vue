<template>
  <div>
    <h1>Create new posts</h1>
    <form @submit="submit">
      <label for="title">Title</label>
      <input
          type="text"
          id="title"
          name="title"
          placeholder="Enter Post's title.."
          autocomplete="off"
          v-model="title"
          required
      />
      <label for="message">Message</label>
      <textarea
          id="message"
          cols="30"
          rows="10"
          placeholder="Enter your message here.."
          autocomplete="off"
          v-model="message"
          required
          style="resize: vertical;"
      ></textarea>
      <label for="category">Category</label>
      <select name="category" id="category" v-model="category">
        <option  v-for="category in categories" :key="category">{{ category }}</option>
      </select>
      <label for="tags">Tags</label>
      <input
          type="text"
          id="tags"
          name="tags"
          autocomplete="off"
          placeholder="Enter tags followed by space.."
          @input="addTag"
      />
      <button @click="e => e.preventDefault()" class="tag-button" v-for="tag in tags" :key="tag">
        #{{ tag }}
        <span @click="removeTag(tag)">x</span>
      </button>
      <div class="button-group">
        <router-link tag="button" to="/" type="button" class="cancel-button" style="float: left;">Cancel</router-link>
        <button type="button" class="draft-button" @click="draft">Save as draft</button>
        <button type="submit" class="submit-button">Post</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "CreatePost",
  data() {
    return {
      title: "",
      message: "",
      category: "Relationship",
      tags: []
    };
  },
  methods: {
    submit(e) {
      e.preventDefault();
      if (!e.isTrusted) return;
      if (!this.title) return;
      if (!this.message) return;
      if (!this.category) return;

      // todo: request server
    },
    draft() {
      // todo: send draft to server... Or save to localstorage?
    },
    addTag(e) {
      const value = e.target.value.slice(0, -1);

      if (e.inputType !== "insertText") return;
      if (!e.isTrusted) return;
      if (e.data !== ",") return;
      if (!value) return;

      e.target.value = "";
      this.tags = [...new Set([...this.tags, value])];
    },
    removeTag(tag) {
      this.tags.splice(this.tags.findIndex((e) => e === tag), 1);
    }
  },
  computed: {
    categories() {
      // get categories from server
      return ["Relationship", "Social"]
    }
  }
}
</script>

<style scoped>
div {
  padding: 0 2em calc(1.5em* 2) 2em;
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

.button-group {
  padding-top: 5%;
  text-align: end;
}

.button-group button {
  margin: 0 10px;
}
</style>
