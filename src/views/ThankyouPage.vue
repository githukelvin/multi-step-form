<template>
  <div class="thanks">
    <div class="image">
      <img :src="getAssets('images/icon-checkmark.svg')" alt="" />
      <div></div>
    </div>
    <h1>Thank you!</h1>
    <p>
      Thanks for confirming you subscription!We hope you have fun using our platform.If you ever
      need support,please feel to email us a support@loremgaming.com.
    </p>
  </div>
</template>

<script setup>
import { getAssets } from '@/helpers/getAssets'
</script>
<style lang="scss">
.thanks {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 565px;
  margin-inline: 2em;
  padding-top: 9em;
}
.inputs,
.parent {
  width: min-content;
}
.sidebar {
  width: max-content;
}
@media screen and (max-width: 50em) {
  .thanks{
    padding-top: 0;
    width: 100%;
    margin-inline: 0;
  }
  .parent{
    width: 100%;
  }
  .inputs{
    width: 90%;
    
  }
  .sidebar{
    width: 100%;
  }
}

</style>
