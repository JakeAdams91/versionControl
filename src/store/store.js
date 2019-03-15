import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    NavigationDisplay: false,
    path: 'Home',
    cheatSheet: [
      {category: "Need to Know", purpose: "Stage your recent changes", example: "git add ."},
      {category: "Need to Know", purpose: "Commit changes with a message", example: "git commit -m \"<message>\""},
      {category: "Need to Know", purpose: "Push your commit/changes", example: "git push"},
      {category: "Need to Know", purpose: "Update branch with latest changes", example: "git pull"},
      {category: "Need to Know", purpose: "Revert to most recent commit", example: "git reset --hard"},
      // {category: "Need to Know", purpose: "", example: ""},
      {category: "Create", purpose: "Clone an existing repo", example: "git clone <clone path>"},
      {category: "Create", purpose: "Create a new repo", example: "git init"},
      {category: "Local Changes", purpose: "View Files changed in directory", example: "git status"},
      {category: "Local Changes", purpose: "Changes to tracked files", example: "git diff"},
      {category: "Local Changes", purpose: "Add all current changes to next commit", example: "git add ."},
      {category: "Local Changes", purpose: "Add some changes in <file> to next commit", example: "git add -p <file>"},
      {category: "Local Changes", purpose: "Commit all local changes in tracked files", example: "git commit -a"},
      {category: "Local Changes", purpose: "Commit previously staged changes", example: "git commit"},
      {category: "Local Changes", purpose: "Change last commit (don't amend published commits!!)", example: "git commit --amend"},
      {category: "Local Changes", purpose: "Commit with a message", example: "git commit -m \"message in quotes\""},
      {category: "Commit History", purpose: "Show all commits in descending order", example: "git log"},
      {category: "Commit History", purpose: "Show changes over time for a specific file", example: "git log -p <file>"},
      {category: "Commit History", purpose: "Find out who broke your code", example: "git blame <file>"},
      {category: "Branches and Tags", purpose: "List all branches", example: "git branch -av"},
      {category: "Branches and Tags", purpose: "switch branch", example: "git checkout <branch>"},
      {category: "Branches and Tags", purpose: "Create a new branch", example: "git checkout -b <new branch>"},
      {category: "Branches and Tags", purpose: "Delete a local branch", example: "git branch -d <branch>"},
      {category: "Update and Publish", purpose: "List all configured remotes", example: "git remote -v"},
      {category: "Update and Publish", purpose: "Show info about a remote", example: "git remot show <remote>"},
      {category: "Update and Publish", purpose: "Add new remote repo, named <new remote>", example: "git remote add <shortname><url>"},
      {category: "Update and Publish", purpose: "Downlaod all changes from <remote> but don't integrate to HEAD", example: "git fetch <remote>"},
      {category: "Update and Publish", purpose: "Download changes and merge to HEAD", example: "git pull <remote><branch>"},
      {category: "Update and Publish", purpose: "Publish local changes on a remote", example: "git push <remote><branch>"},
      {category: "Update and Publish", purpose: "Delete a branch on the remote", example: "git branch -dr <remote/branch>"},
      {category: "Merge and Rebase", purpose: "Merge <branch> into current HEAD", example: "git merge <branch>"},
      {category: "Merge and Rebase", purpose: "Rebase your current HEAD onto <branch>", example: "git rebase <branch>"},
      {category: "Merge and Rebase", purpose: "Abort a rebase", example: "git rebase --abort"},
      {category: "Merge and Rebase", purpose: "Continue a rebase after resolving conflicts", example: "git rebase --continue"},
      {category: "Merge and Rebase", purpose: "Use your configured mergetool to solve conflicts", example: "git mergetool"},
      {category: "Undo", purpose: "Discard all local changes", example: "git reset --hard"},
      {category: "Undo", purpose: "discard local changes in a specific file", example: "git checkout HEAD <file>"},
      {category: "Undo", purpose: "Revert a commit with a new commit", example: "git revert <commit>"},
      {category: "Undo", purpose: "Reset your HEAD to a previous commit and discard all changes since", example: "git reset --hard <commit>"}
  ]
  },
  getters: {
    getNavigationDisplay (state) {
      return state.NavigationDisplay
    },
    getPath (state) {
      return state.path
    },
    getCheatSheet (state) {
      return state.cheatSheet
    }
  },
  mutations: {
    toggleNavigationDisplay (state) {
      state.NavigationDisplay = !state.NavigationDisplay
    },
    setPath (state, newPath) {
      state.path = newPath
    }
  },
  actions: {

  }
})
