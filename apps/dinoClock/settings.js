(function(back) {
  const defaultSettings = {
    showSteps    : false,
	enableTorch	 : false
  }
  let settings = Object.assign(defaultSettings, require('Storage').readJSON('dinoClock.json',1)||{});
  
  function save(key, value) {
    settings[key] = value;
    require('Storage').write("dinoClock.json", settings);
  }

  let menu ={
    '': { 'title': 'Dino Clock' },
    /*LANG*/'< Back': back,
    /*LANG*/'Show steps': {
      value:  !!settings.showSteps,
      onchange: x => save('showSteps', x),
    },
   /*LANG*/'Enable torch': {
      value:  !!settings.enableTorch,
      onchange: x => save('enableTorch', x),
    },
  };
  E.showMenu(menu);
})
