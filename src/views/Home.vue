<template>
  <article class="home">
    <h1>
      Frontend Engineer
      <span>(<span class="vue">Vue.js</span>) - Remote, UK - up to</span>
      £50,000
    </h1>
    <p class="intro">If you're an enthusiastic, friendly and driven coder, then this is a great opportunity with an established UK-based <strong>technology-driven start up</strong>.</p>
    <ul>
      <li>Do you enjoy building <strong>user-focused web apps</strong> with modern technology that gets used by a variety of people?</li>
      <li>Do you like working as part of a friendly, supportive and high-performing team, offering an <strong>outstanding work-life balance</strong>?</li>
    </ul>
    <h2>Skills &amp; Experience</h2>
    <ul>
      <li>Strong experience working with frontend technologies; JavaScript (<span class="vue">Vue.js</span> is desirable, but not essential), CSS and HTML.</li>
      <li>Strong experience working with frontend build frameworks/tools (<span class="webpack">webpack</span>)</li>
      <li>Experience of working within an Agile framework</li>
      <li>Strong verbal and written communication skills</li>
      <li>Experience of working with in a collaborative manner</li>
      <li>Team oriented approach and strong interpersonal skills</li>
      <li>Desire to learn and develop new and existing skills/competencies</li>
      <li>Ability to communicate and influence</li>
    </ul>
    <h2>Responsibilities</h2>
    <ul>
      <li>Delivering a web application end-to-end</li>
      <li>Ensuring quality and innovation are at the code of the product</li>
      <li>Show an understanding of architecture, implementation, and delivery of new web-based UI functionality</li>
      <li>Provide problem solving and debugging skills</li>
      <li>Regular participation in code review</li>
      <li>Actively participate in project scoping, planning, design and execution</li>
      <li>Use your knowledge of frontend engineering concepts to design and implement tested, reusable, and modular code</li>
      <li>Apply knowledge of the business goals to derive innovative solutions for organisation and our clients</li>
      <li>Translating designs and wireframes into high quality component-based code</li>
      <li>Solid understanding on modular design and single responsibility principle</li>
    </ul>
    <app-alert title="A note to Recruitment Agencies">
      We don't accept speculative CVs. Any unsolicited CVs received will be treated as the property of StaffCirlce Ltd and any Terms &amp; Conditions associated with the use of such CVs will be considered <code>null</code> and <code>void</code>.
    </app-alert>
    <footer>
      <div>
        <h3>
          <router-link :to="{ name: 'About' }">
            Find out about us
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
  name: 'PageHome',
  components: {
    AppAlert
  }
}
</script>