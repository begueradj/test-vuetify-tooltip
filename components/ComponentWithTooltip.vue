<template>
  <v-container>
    <v-row>
      <v-col cols="12">
        <v-tooltip bottom>
          <template v-slot:activator="{ on }">
            <v-icon v-on="on" color="grey">
              help
            </v-icon>
          </template>
          <span>
            {{ tooltipText }}
          </span>
        </v-tooltip>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: 'ComponentWithTooltip',
  props: {
    tooltipText: {
      type: String,
      default: ''
    }
  }
}
</script>
