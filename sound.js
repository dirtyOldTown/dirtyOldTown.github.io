const audio = document.getElementById("sound");
function soundEffect(target) {
  if (target.value == "=") {
    audio.src = "./sound/office_calculator_small_put_down_on_table.mp3";
  } else if (target.value == "AC") {
      audio.src = "./sound/zapsplat_foley_bottles_glass_wine_x2_drop_into_recycle_bin_79064.mp3";
  } else if (target.value == "CE") {
      audio.src = "./sound/zapsplat_office_calculator_button_single_press_001_81851.mp3";
  } else {
      audio.src = "./sound/zapsplat_office_calculator_button_press_single_001_11983.mp3";
  }
  audio.play()
}

export { soundEffect }