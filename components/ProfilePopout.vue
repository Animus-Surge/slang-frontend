<template>
  <div class="profile-panel" :class="{hidden: !isProfilePopoutOpen}">
    <div class="banner">
      <img class="bannerimg" src="https://via.placeholder.com/400x200" alt="Banner" />
    </div>
    <div class="container">
      <div class="panel-content">
        <div class="username-panel">
          <img class="pfp" src="https://via.placeholder.com/64x64" alt="Profile Picture" />
          <div class="panel-text">
            <h3 id="dispname">Display Name</h3>
            <h4 id="username">username</h4>
          </div>
        </div>
        <div class="bio-panel">
          <span id="pronouns">Pro/Nouns</span><br>
          <span id="status">Finishing up Slang</span>
          <hr>
          <p>
            Blah blah fancy bio here yadda yadda yadda some fancy text here<br><br>OwO Whats This???
          </p>
        </div>
      </div>

      <div class="panel-content">
        <div class="active-status">
          <img class="gamepfp" src="https://via.placeholder.com/64x64" alt="Playing game..." />
          <div class="panel-text">
            <h3>Playing Game</h3>
            <h4>Game Name</h4>
          </div>
        </div>
      </div>

      <div class="connections-panel">
        <Dropdown name="Mutual Friends">
          <span>No mutual friends</span>
        </Dropdown>
        <Dropdown name="Mutual Groups">
          <span>No mutual groups</span>
        </Dropdown>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
//Toggle logic
import { ref, onMounted } from 'vue'

const isProfilePopoutOpen = useState('profilePopoutOpen', () => false)

const mutconn = ref(null);
var mc_div: HTMLElement;
const mutgroup = ref(null);
var mg_div: HTMLElement;

onMounted(() => {
  mc_div = mutconn.value!;
  mg_div = mutgroup.value!;
})

const toggleDropdown = (id: string) => {
  console.log(mc_div);
  console.log(mg_div);
  console.log(id);

  var dropdownContent = null;
  switch (id) {
    case "mutconn":
      dropdownContent = mc_div;
      break;
    case "mutgroup":
      dropdownContent = mg_div;
      break;
    default:
      console.log("Invalid dropdown id");
      return;
  }
  if (dropdownContent) {
    dropdownContent.classList.toggle("hidden");
  }
}
</script>

<!--
  TODO: add button to hide popout, edit profile, etc.
-->

<style scoped>

/* TODO: organize this */
div.banner {
  /**Fade lower part out gradient style */
  mask-image: linear-gradient(rgba(0,0,0,1), rgba(0,0,0,0));
  position: absolute;
  top: 0;
}

div.container {
  margin-top: 6rem;
}

div.connections-panel {
  align-items: center;
  margin: 8px;
  background-color: #222;
  border-radius: 5px;
}

div.profile-panel {
  position: absolute;
  bottom: 0;
  left: 0;
  margin-left: 4rem;
  z-index: 5;

  overflow-x: hidden;
  overflow-y: scroll;

  width: 400px;
  min-height: 30%;
  height: fit-content;
  max-height: 100%;

  border-radius: 5px;

  background-color: #111;

  box-shadow: 0 0 0.5rem #111;

  transition-property: left;
  transition-duration: 500ms;
  transition-timing-function: ease-in-out;
}

div.profile-panel.hidden {
  left: -400px;
}

div.panel-content {
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: #aaa2;

  margin: 8px;
  padding: 8px;

  border-radius: 5px;
}

div.username-panel {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  padding: 8px;
}

div.active-status {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 5px;

  padding: 8px;
}

div.bio-panel {
  width: 100%;
}

img.pfp {
  border-radius: 50%;
  width: 64px;
  height: 64px;
}

img.gamepfp {
  border-radius: 8px;
  width: 64px;
  height: 64px;
}

@media screen and (max-width: 768px) {
  div.profile-panel {
    display: none;
  }
}
</style>
