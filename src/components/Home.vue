<template>
  <v-container grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12>
        <v-card color="#263238" elevation="24" >
          <v-card-title class="title white--text">
            What is Version Control?
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Version Control: The task of keeping a software system
            consitsting of many versions and configurations well organized
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs9>
        <v-card color="#263238" elevation="12" >
          <v-card-title class="title white--text">
            Why should I use Version Control software?
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Version control software is not just for enterprises/large dev projects,
            version control is perfect for the every-day coder. Allowing one to easily switch between
            versions(Branches) to test new ideas, concepts and prototypes without breaking their site, 
            leaving the original (Master) untouched.
          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs3>
        <v-card color="#263238" elevation="8">
          <v-card-title class="title white--text">
            Why Choose git
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Git is one of the most used version control software on the market. Sure their are many others out there, but its most
            likely that your future employer will be utilizing git.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs4>
        <v-card color="#263238" raised>
          <v-card-title class="title white--text">
            How do I Begin?
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            First read the installation guide, found here
            <v-btn
              @click="route('Installation')"
              color="primary"
              flat
              class="ma-0">
                Installation Guide
            </v-btn>
            then continue reading
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs8>
        <v-card color="#263238">
          <v-card-title class="title white--text">
            Init your first project
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
              first in your command prompt move into your project folder <span class="example">cd ../../yourProjectFolder</span>
              and give the command <v-spacer /><span class="command">git init</span>
              You will then see your prompt return the following
              <span class="return">Initialized empty Git repository in C:/Path/To/Your/Repo/</span>
              Success!
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex>
        <v-card color="#263238" flat>
          <v-card-title class="title white--text">
            Add your files to your new Git Repository
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
              Great, you've just Initialized you're git project. Next type
              <span class="command">git status</span> to see your Untracked files and make adjustments as needed.
              <v-spacer />  You must now add your files to the repository <span class="command">git add .</span>
              next, you'll need to commit your files, this stages them for the next time you push to your repo.
              <v-spacer /> <span class="command">git commit -m "Add a message here that briefly explains your latest changes"</span>
              <v-spacer />Finally, we must push our tracked files and the message to our Repository.
              <span class="command">git push</span>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs5>
        <v-card color="#263238" flat>
          <v-card-title class="title white--text">
            Set upstream!?!
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Whoops, you must set up a remote host, try github.com. Create a repository there and then <v-spacer />
            <span class="command">git push --set-upstream origin 'yourbranch'</span>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs3>
        <v-card color="#263238" flat>
          <v-card-title class="title white--text">
            Push successful
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            Congratulations, you've successfully set up a new git repo and are ready to begin wreckin' it.
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex d-flex xs4>
        <v-card color="#263238" flat>
          <v-card-title class="title white--text">
            Legend
          </v-card-title>
          <v-divider dark />
          <v-card-text class="white--text">
            git commands:  <span class="command">are this color</span> <v-spacer />
            command prompts: <span class="example">are this color</span> <v-spacer />
            git responses: <span class="return">are this color</span>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: 'Home',
  methods: {
    route (path) {
      this.$store.commit('setPath', 'Installation Guide')
    }
  }
}
</script>

<style>
  .command {
    color: #FF5722;
    font-weight: bold;  
  }
  .example {
    color: #607D8B;
  }
  .return {
    color: #FF9800;
  }
</style>
