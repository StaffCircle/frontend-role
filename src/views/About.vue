<template>
  <article class="about">
    <h1>
      Frontend Engineer
      <span>(<span class="vue">Vue.js</span>) - Remote, UK - up to</span>
      £50,000
    </h1>
    <h2>Who we are</h2>
    <p>Our mission is to Engage, Empower and Enhance the experience of all workers. We've all seen first hand how internal communications and employee feedback is fundamentally flawed in most workplaces, and poor communications causes low morale, low productivity and negative experience for workers. From this, the company was born.</p>
    <p>We strive to create a place where communications and productivity can flow on any device in any location helping to better empower, engage and enhance every company's most valuable asset - their people.</p>
    <p>Our passion for the workers' experience has focused the design around the worker, using the same methods as popular consumer software. One finger or thumb operation is all it takes, Non-Technical? No problem. No internet? No problem. No app installed? No problem. Availability, ease of use and accessibility is key.</p>
    <p>Our journey began in October 2017 and in the past 12 months we've had several major successes; securing funding, gaining several clients, and being accepted onto several startup programs including Microsoft Startups.</p>
    <p>There are so many ideas still to explore and experiment with that we need more able hands to join us in this journey. Over the next 12 months we're planning to expand the team and help these ideas become a reality. Initially we'll be looking for a Frontend Engineer to collaborate with the development team base around the North West focusing on their core platform, enabling growth of existing and planned modules. The ideal candidate will thrive in a fast-paced, agile environment and relish the challenge of bringing ideas into reality. The platform is built on mostly a Microsoft stack, however the web app is pure JavaScript, CSS and HTML, so the candidate must have a passion for developing with the latest and greatest tech in this area.</p>
    <app-alert title="A note to Recruitment Agencies">
      We don't accept speculative CVs. Any unsolicited CVs received will be treated as the property of StaffCirlce Ltd and any Terms &amp; Conditions associated with the use of such CVs will be considered <code>null</code> and <code>void</code>.
    </app-alert>
    <footer>
      <div>
        <h3>
          <router-link :to="{ name: 'Home' }">
            Back
          </router-link>
        </h3>
      </div>
      <div>
        <button
          class="apply"
          @click="$router.push({ name: 'Apply' })"
        >
          Apply
        </button>
      </div>
    </footer>
  </article>
</template>

<script>
import AppAlert from '../components/AppAlert.vue'

export default {
  name: 'PageAbout',
  components: {
    AppAlert
  }
}
</script>
