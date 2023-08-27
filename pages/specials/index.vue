<template>
  <Head>
    <Title>Специальные предложения | Громово парк</Title>
  </Head>
  <section class="gr-special">
    <div class="container">
      <GrPageTitles :showLogo="false" class="gr-special__titles">
        <template v-slot:h1>Специальные предложения</template>
        <template v-slot:h2>Постоянные акции в Громово парк</template>
      </GrPageTitles>
      <GrOffers class="gr-special__offers" />
    </div>
  </section>
</template>
