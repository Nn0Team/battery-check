<template>
  <Page ref="page" class="page">
    <ActionBar class="action-bar">
      <Label class="action-bar-title" text="Dashboard"></Label>
    </ActionBar>

    <GridLayout>
      <Label class="info" horizontalAlignment="center" verticalAlignment="center">
        <FormattedString>
          <Span class="fa" text.decode="&#xf135; "/>
          <Span :text="message"/>
        </FormattedString>
      </Label>
    </GridLayout>
  </Page>
</template>

<script>
export default {
  computed: {
    message() {
      return "{N} Battery Saver";
    }
  }
};
</script>

<style scoped lang="scss">
@import "../../../app-variables";

.fa {
  color: $accent-dark;
}

.info {
  font-size: 20;
}
</style>
