<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs3>
        <v-card color="#263238" elevation="24" >
          <v-card-title class="title white--text">
            Tools Required:
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            a Computer, <v-spacer />
            git version control, <v-spacer />
            IDE (text editor), <v-spacer />
            Cmder command prompt (preferred)<v-spacer />
            Node's NPM (preferred)<v-spacer />
            [or Yarn]
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs9>
        <v-card color="#263238" raised>
          <v-card-title class="title white--text">
            Caveats:
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            I use Cmder Command Prompt tool for all things git and more. Cmder brings Linux style commands to the Windows platform;
            lets be honest, Windows Command Prompt is just a terrible, terrible thing. That said this git installation process will be covered with the assumption 
            that you use either Cmder.exe or any other good Console Emulator for Windows (if you have Linux then ignore this)
            <a href="https://cmder.net/" target="_blank"> Cmder.exe can be found here</a>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12>
        <v-card color="#263238" flat >
          <v-card-title class="title white--text">
            Installation and Setup:
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Lets begin! Lets begin! First you must download git <a href="https://git-for-windows.github.io/" target="_blank">git download here</a>
            use the set-up wizard. I recommend you select Use git and optional Unix tools from Windows Command Prompt, then just follow the prompts.
            Next i recommend you install Cmder from the link above, or, just google Cmder. <v-spacer />
            Your next step should be to set up a Github account to store your repositories, as git will do little good if you cannot stage / push changes to a repo.
            <a href="https://github.com/" target="_blank">Github here</a> <v-spacer />

            Once you've established a github account, select Create a Repository, give it a name and follow the Readme to set your local project up to github. <v-spacer />

            Congratulations! You've installed git. click here for how to initialize your first version controlled project.
            <v-btn
              @click="route('Home')"
              color="primary"
              flat
              class="ma-0">
                Initializing your first project
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs9>
        <v-card color="#263238" raised>
          <v-card-title class="title white--text">
            Installation Resources/Citations:

          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            <a href="https://git-scm.com/about" target="_blank">Git website</a> <v-spacer />
            <a href="https://cmder.net/" target="_blank">Cmder website</a> <v-spacer />
            <a href="https://nodejs.org/en/download/" target="_blank">Node.js and Node Packet Manager</a><v-spacer />
            <a href="https://pixelpioneers.co/blog/2017/using-github-without-the-command-line" target="_blank">Git without a Command prompt Tutorial</a><v-spacer />
            <a href="https://www.awmoore.com/2015/01/14/setting-up-git-and-cmder/" target="_blank">Instasll Git / Cmder tutorial</a> <v-spacer />
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs3>
        <v-card color="#263238" raised>
            <v-card-title class="title white--text">
            Cheat-Sheet page:

          </v-card-title>
            <v-divider dark />
          <v-card-text class="white--text">
            <v-btn
              @click="route('Home')"
              color="success"
              flat
              class="ma-0">
                Git Cheat sheet
            </v-btn>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'VersionControl',
  methods: {
    route (path) {
      if(path === 'Home') {
      this.$store.commit('setPath', 'Home')
      } else {
        this.$store.commit('setPath', 'Cheat-Sheet')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
