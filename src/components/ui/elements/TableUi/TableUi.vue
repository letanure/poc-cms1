<template lang="pug">
  table.TableUi.table
    thead
      tr
        th
          abbr(title='Position') Pos
        th Team
        th
          abbr(title='Played') Pld
        th
          abbr(title='Won') W
        th
          abbr(title='Drawn') D
        th
          abbr(title='Lost') L
        th
          abbr(title='Goals for') GF
        th
          abbr(title='Goals against') GA
        th
          abbr(title='Goal difference') GD
        th
          abbr(title='Points') Pts
        th Qualification or relegation
    tfoot
      tr
        th
          abbr(title='Position') Pos
        th Team
        th
          abbr(title='Played') Pld
        th
          abbr(title='Won') W
        th
          abbr(title='Drawn') D
        th
          abbr(title='Lost') L
        th
          abbr(title='Goals for') GF
        th
          abbr(title='Goals against') GA
        th
          abbr(title='Goal difference') GD
        th
          abbr(title='Points') Pts
        th Qualification or relegation
    tbody
      tr
        th 1
        td
          a(href='https://en.wikipedia.org/wiki/Leicester_City_F.C.', title='Leicester City F.C.') Leicester City
          strong (C)
        td 38
        td 23
        td 12
        td 3
        td 68
        td 36
        td +32
        td 81
        td
          | Qualification for the
          a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage', title='2016–17 UEFA Champions League') Champions League group stage
      tr
        th 2
        td
          a(href='https://en.wikipedia.org/wiki/Arsenal_F.C.', title='Arsenal F.C.') Arsenal
        td 38
        td 20
        td 11
        td 7
        td 65
        td 36
        td +29
        td 71
        td
          | Qualification for the
          a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage', title='2016–17 UEFA Champions League') Champions League group stage
      tr
        th 3
        td
          a(href='https://en.wikipedia.org/wiki/Tottenham_Hotspur_F.C.', title='Tottenham Hotspur F.C.') Tottenham Hotspur
        td 38
        td 19
        td 13
        td 6
        td 69
        td 35
        td +34
        td 70
        td
          | Qualification for the
          a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Group_stage', title='2016–17 UEFA Champions League') Champions League group stage
      tr.is-selected
        th 4
        td
          a(href='https://en.wikipedia.org/wiki/Manchester_City_F.C.', title='Manchester City F.C.') Manchester City
        td 38
        td 19
        td 9
        td 10
        td 71
        td 41
        td +30
        td 66
        td
          | Qualification for the
          a(href='https://en.wikipedia.org/wiki/2016%E2%80%9317_UEFA_Champions_League#Play-off_round', title='2016–17 UEFA Champions League') Champions League play-off round

</template>

<script>
export default {
  name: 'TableUi',
}
</script>

<style lang="stylus">
// .TableUi
</style>
