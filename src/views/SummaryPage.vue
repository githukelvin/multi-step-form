<template>
  <div class="summary top">
    <HeaderIntro
      title="Finishing up"
      description="Double-check everything looks OK before confirming"
    />
      <div class="mainc">
      <div class="package">
        <div class="packageDetails">
          <h1>Arcade(Yearly)</h1>
          <router-link to="/plan">Change</router-link>
        </div>
        <p>$90/yr</p>
        
        
      </div>
      <div class="info">
            <div class="text">
              <p>Online Service</p>
              <h2>+$10yr</h2>
            </div>
            <div class="text">
                <p>Larger Storage</p>
                <h2>+$20yr</h2>
              </div>
          </div>
    </div>
    <div class="total">
      <p class="totaldetails">Total(per year)</p>
      <h2>$120/yr</h2>
    </div>
  </div>

</template>

<script setup>
import HeaderIntro from '@/components/HeaderIntro.vue'
</script>
