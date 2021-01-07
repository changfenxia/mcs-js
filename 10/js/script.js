// При помощи любых извстных вам циклов переберите многомерный массив выше так, чтобы в консоль вывелись все рэпперы и продюсеры.

let newSchool = [
    [
      ['Lil Yachty', 'Playboi Carti', 'Lil Uzi Vert'],
      ['Sonny Digital', 'Metro Boomin', '12Hunna']
    ],
    [
      ['Yung Lean', 'Ecco2K', 'Bladee'],
      ['Whitearmor', 'PJ Beats', 'Yung Gud']
    ]
  ]

  newSchool.forEach((arr) => {
      arr.forEach((childArr) => {
          for(el of childArr) {
              console.log(el)
          }
      })
  });