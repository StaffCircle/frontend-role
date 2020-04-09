<template>
  <article class="apply">
    <page-header />
    <app-alert
      light
      title="A note to Recruitment Agencies"
    >
      We don't accept speculative CVs. Any unsolicited CVs received will be treated as the property of StaffCirlce Ltd and any Terms &amp; Conditions associated with the use of such CVs will be considered <code>null</code> and <code>void</code>.
    </app-alert>
    <h2>How to apply?</h2>
    <p>In order to be a considered applicant for this role, you'll need to meet the following minimum criteria:</p>
    <ol>
      <li>Live in the UK, and be eligible to work in the UK</li>
      <li>Must be able to travel to our main office (in Leicester city centre) about once a month</li>
      <li>Have shareable code examples (either an online portfolio, or open-source repositories on <span class="codepen">Codepen</span>, <span class="github">Github</span>, <span class="gitlab">Gitlab</span>, or similar)</li>
    </ol>
    <p>If you're confident that you meet the above, then please email a copy of your <strong>current CV</strong> and a <strong>write-up</strong> of why you think you'd be a great team member.</p>
    <p>The email address to send your CV to is <code><a href="mailto:frontendrole@staffcircle.com">frontendrole@staffcircle.com</a></code>.</p>
    <h3>Interview process</h3>
    <p>We conduct the majority of our interviews remotely, via Microsoft Teams (or Skype if needed).</p>
    <ol>
      <li>Initial online chat (with Manager and sometimes peer) to discuss the role, and suitability</li>
      <li>Small technical assessment</li>
      <li>Second online chat (with CEO) to confirm suitability and fit</li>
      <li>If successful you'll receive a Job Offer from our CEO</li>
    </ol>
    <footer>
      <div>
        <h3>
          <router-link :to="{ name: 'Home' }">
            Back
          </router-link>
        </h3>
      </div>
      <div>

      </div>
    </footer>
  </article>
</template>

<script>
import AppAlert from '../components/AppAlert.vue'
import PageHeader from '../components/PageHeader.vue'

export default {
  name: 'PageApply',
  components: {
    AppAlert,
    PageHeader
  }
}
</script>

<style lang="postcss" scoped>
  p > code {
    @apply text-white;
  }
</style>
