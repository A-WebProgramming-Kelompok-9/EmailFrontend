<template>
  <div class="flex-col sidebar-wrapper">
    <router-link class="navbar-brand mx-auto" to="/dashboard">
      <img src="@/assets/SPW LOGO.png" alt="" class="rounded-circle mr-1"/>
      Speedwagon Mail</router-link
    >

    <div class="list-group mt-2">
      <router-link
          to="/Dashboard/#Inbox"
          class="list-group-item list-group-item-action btn-link acti"
          id="InboxSel"
          onclick="Sel(0)"
      >Inbox
      </router-link
      >
      <router-link
          to="/Dashboard/#Unread"
          class="list-group-item list-group-item-action btn-link"
          id="UnreadSel"
          onclick="Sel(1)"
      >Unread</router-link
      >
      <router-link
          to="/Dashboard/#Sent"
          class="list-group-item list-group-item-action btn-link"
          id="SentSel"
          onclick="Sel(2)"
      >Sent</router-link
      >
      <router-link
          to="/Dashboard/#Favourite"
          class="list-group-item list-group-item-action btn-link"
          id="FavSel"
          onclick="Sel(3)"
      >Favourite</router-link
      >
      <router-link
          to="/Dashboard/#Spam"
          class="list-group-item list-group-item-action btn-link"
          id="SpamSel"
          onclick="Sel(4)"
      >Spam</router-link
      >
    </div>

    <div class="profile mt-auto mb-2">
      <div class="flex-col text">
        <p>Jonathan Joestar</p>

        <div class="links">
          <router-link to="/dashboard/10/settings" class="btn-link">Profile</router-link>
          <router-link to="/" class="btn-link">Logout</router-link>
        </div>
      </div>
      <img
          src="@/assets/Dio_Yeah.jpg"
          alt="logo"
          class="rounded-circle my-auto"
          style="width: 50px; height: 50px"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Sidebar",
  components: {}
}
</script>

<style scoped lang=scss>
.sidebar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 250px;
  background-color: $brown-200;
  color: white;
  display: flex;
  flex-direction: column;

  .navbar-brand {
    display: flex;
    height: 100px;
    align-items: center;
    color: $gray-100;

    &:hover {
      color: white;
    }

    img {
      height: 60px;
      width: 60px;
    }
  }

  .btn-link {
    color: $gray-100;
    background-color: rgba($brown-400, 0.8);

    &:hover {
      background-color: rgba($brown-400, 0.5);
    }

    &.acti {
      background-color: rgba($brown-400, 0.5);
      color: $brown-100;
    }
  }

  .list-group {
    width: 100%;
    font-size: larger;

    .list-group-item {
      align-items: center;

      height: 50px;
    }
  }

  .profile {
    width: 100%;
    height: 100px;
    background-color: rgba($color: $brown-400, $alpha: 0.8);
    display: flex;
    justify-content: space-between;
    padding: 10px;

    .btn-link {
      background-color: transparent;
      color: $brown-100;
    }

    .text {
      width: calc(100% - 90px);
      display: flex;
      flex-direction: column;
      justify-content: space-around;

      * {
        margin: 0;
      }
    }
    .links{
      display: flex;
      justify-content: space-between;
    }
  }
}
</style>