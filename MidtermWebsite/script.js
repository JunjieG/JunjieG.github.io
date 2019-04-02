setTimeout(function () {
  $("#preloader").fadeOut();
}, 2000);

$(document).ready(function () {

  $(window).scrollTop(0, 0);
  $(".fstplc").hide();
  $(".wrapper").hide();
  $(".hide").hide();



  $(window).scroll(function () {
    $("#startBackground").css("opacity", 1 - $(window).scrollTop() / 600)
  })

  $(".menuIcon").on("click", function (event) {

    $("#preloader").fadeIn();
    setTimeout(function () {
      $(".hide").show();
      $(".fstplc").show();
      $(".wrapper").show();
      $("#preloader").fadeOut();
    }, 500);
  })

  $("#bug").on("click", function (event) {
    // First Place
    setTimeout(function () {
      $("#fstplcimg").attr("src", "images/PokemonImg/bug.png")
      $("#fstPlcN").text("Scizor");
      $("#fstPlcDN").text("212");
      $("#fstPlcT").text("Bug/Steel");
      $("#fstPlcMaxCP").text("3001");
      $("#fstPlcMinCP").text("2600");
      $("#fstPlcMS").text("Bullet Punch/Iron Head");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/Pinsir.png");
      $("#sndPlcN").text("Pinsir");
      $("#sndPlcMaxCP").text("2959");
      $("#sndPlcMS").text("Bug Bite/X-Scissor");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/pinsir/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/Heracross.png");
      $("#trdPlcN").text("Heracross");
      $("#trdPlcMaxCP").text("3101");
      $("#trdPlcMS").text("Counter/Close Combat");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/heracross/");
    }, 300)
  })

  $("#dark").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/dark.png")
      $("#fstPlcN").text("Tyranitar");
      $("#fstPlcDN").text("248");
      $("#fstPlcT").text("Dark/Rock");
      $("#fstPlcMaxCP").text("3834");
      $("#fstPlcMinCP").text("3383");
      $("#fstPlcMS").text("Bite/Crunch");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/houndoom.png");
      $("#sndPlcN").text("Houndoom");
      $("#sndPlcMaxCP").text("2635");
      $("#sndPlcMS").text("Snarl/Foul Play");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/houndoom/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/absol.png");
      $("#trdPlcN").text("Absol");
      $("#trdPlcMaxCP").text("2526");
      $("#trdPlcMS").text("Snarl/Dark Pulse");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/absol/");
    }, 300)
  })

  $("#dragon").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/dragon.png")
      $("#fstPlcN").text("Rayquaza");
      $("#fstPlcDN").text("384");
      $("#fstPlcT").text("Dragon/Flying");
      $("#fstPlcMaxCP").text("3835");
      $("#fstPlcMinCP").text("3375");
      $("#fstPlcMS").text("Dragon Tail/Outrage");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/latios.png");
      $("#sndPlcN").text("Latios");
      $("#sndPlcMaxCP").text("3644");
      $("#sndPlcMS").text("Dragon Breath/Dragon Claw");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/latios/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/dragonite.png");
      $("#trdPlcN").text("Dragonite");
      $("#trdPlcMaxCP").text("3792");
      $("#trdPlcMS").text("Dragon Tail/Hurricane");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/dragonite/");
    }, 300)
  })

  $("#electric").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/electric.png")
      $("#fstPlcN").text("Raikou");
      $("#fstPlcDN").text("243");
      $("#fstPlcT").text("Electric");
      $("#fstPlcMaxCP").text("3452");
      $("#fstPlcMinCP").text("3024");
      $("#fstPlcMS").text("Thunder Shock/Wild Charge");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/zapdos.png");
      $("#sndPlcN").text("Zapdos");
      $("#sndPlcMaxCP").text("3527");
      $("#sndPlcMS").text("Thunder Shock/Thunder");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/zapdos/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/jolteon.png");
      $("#trdPlcN").text("Jolteon");
      $("#trdPlcMaxCP").text("2888");
      $("#trdPlcMS").text("Thunder Shock/Thunder");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/jolteon/");
    }, 300)
  })

  $("#fairy").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/fairy.png")
      $("#fstPlcN").text("Gardevoir");
      $("#fstPlcDN").text("282");
      $("#fstPlcT").text("Fairy/Psychic");
      $("#fstPlcMaxCP").text("3093");
      $("#fstPlcMinCP").text("2687");
      $("#fstPlcMS").text("Confusion/Dazzling Gleam");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/granbull.png");
      $("#sndPlcN").text("Granbull");
      $("#sndPlcMaxCP").text("2552");
      $("#sndPlcMS").text("Snarl/Close Combat");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/granbull/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/clefable.png");
      $("#trdPlcN").text("Clefable");
      $("#trdPlcMaxCP").text("2437");
      $("#trdPlcMS").text("Pound/Moonblast");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/clefable/");
    }, 300)
  })

  $("#fighting").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/fighting.png")
      $("#fstPlcN").text("Machamp");
      $("#fstPlcDN").text("068");
      $("#fstPlcT").text("Fighting");
      $("#fstPlcMaxCP").text("3056");
      $("#fstPlcMinCP").text("2651");
      $("#fstPlcMS").text("Counter/Dynamic Punch");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/heracross.png");
      $("#sndPlcN").text("Heracross");
      $("#sndPlcMaxCP").text("3101");
      $("#sndPlcMS").text("Counter/Close Combat");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/heracross/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/blaziken.png");
      $("#trdPlcN").text("Blaziken");
      $("#trdPlcMaxCP").text("2631");
      $("#trdPlcMS").text("Counter/Stone Edge");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/blaziken/");
    }, 300)
  })

  $("#fire").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/fire.png")
      $("#fstPlcN").text("Moltres");
      $("#fstPlcDN").text("146");
      $("#fstPlcT").text("Fire/Flying");
      $("#fstPlcMaxCP").text("3465");
      $("#fstPlcMinCP").text("3034");
      $("#fstPlcMS").text("Fire Spin/Sky Attack");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/hooh.png");
      $("#sndPlcN").text("Ho-Oh");
      $("#sndPlcMaxCP").text("3863");
      $("#sndPlcMS").text("Extrasensory/Brave Bird");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/ho-oh/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/entei.png");
      $("#trdPlcN").text("Entei");
      $("#trdPlcMaxCP").text("3473");
      $("#trdPlcMS").text("Fire Spin/Overheat");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/entei/");
    }, 300)
  })

  $("#flying").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/flying.png")
      $("#fstPlcN").text("Honchkrow");
      $("#fstPlcDN").text("430");
      $("#fstPlcT").text("Dark/Flying");
      $("#fstPlcMaxCP").text("2711");
      $("#fstPlcMinCP").text("2310");
      $("#fstPlcMS").text("Snarl/Dark Pulse");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/rayquaza.png");
      $("#sndPlcN").text("Rayquaza");
      $("#sndPlcMaxCP").text("4354");
      $("#sndPlcMS").text("Dragon Tail/Aerial Ace");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/rayquaza/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/salamence.png");
      $("#trdPlcN").text("Salamence");
      $("#trdPlcMaxCP").text("3532");
      $("#trdPlcMS").text("Dragon Tail/Dragon Meteor");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/salamence/");
    }, 300)
  })

  $("#ghost").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/ghost.png")
      $("#fstPlcN").text("Gengar");
      $("#fstPlcDN").text("094");
      $("#fstPlcT").text("Ghost/Poison");
      $("#fstPlcMaxCP").text("2878");
      $("#fstPlcMinCP").text("2477");
      $("#fstPlcMS").text("Shadow Claw/Shadow Ball");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/banette.png");
      $("#sndPlcN").text("Banette");
      $("#sndPlcMaxCP").text("2073");
      $("#sndPlcMS").text("Shadow Claw/Shadow Ball");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/banette/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/haunter.png");
      $("#trdPlcN").text("Haunter");
      $("#trdPlcMaxCP").text("1963");
      $("#trdPlcMS").text("Lick/Sludge Bomb");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/haunter/");
    }, 300)
  })

  $("#grass").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/grasspoison.png")
      $("#fstPlcN").text("Roserade");
      $("#fstPlcDN").text("407");
      $("#fstPlcT").text("Grass/Poison");
      $("#fstPlcMaxCP").text("2971");
      $("#fstPlcMinCP").text("2570");
      $("#fstPlcMS").text("Razor Leaf/Grass Knot");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/breloom.png");
      $("#sndPlcN").text("Breloom");
      $("#sndPlcMaxCP").text("2407");
      $("#sndPlcMS").text("Counter/Dynamic Punch");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/breloom/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/exeggutor.png");
      $("#trdPlcN").text("Exeggutor");
      $("#trdPlcMaxCP").text("3014");
      $("#trdPlcMS").text("Extrasensory/Psychic");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/exeggutor/");
    }, 300)
  })

  $("#ground").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/ground.png")
      $("#fstPlcN").text("Groudon");
      $("#fstPlcDN").text("383");
      $("#fstPlcT").text("Ground");
      $("#fstPlcMaxCP").text("4115");
      $("#fstPlcMinCP").text("3645");
      $("#fstPlcMS").text("Mud Shot/Earthquake");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/garchomp.png");
      $("#sndPlcN").text("Garchomp");
      $("#sndPlcMaxCP").text("3327");
      $("#sndPlcMS").text("Dragon Tail/Earthquake");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/garchomp/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/rhyperior.png");
      $("#trdPlcN").text("Rhyperior");
      $("#trdPlcMaxCP").text("2785");
      $("#trdPlcMS").text("Mud Slap/Stone Edge");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/rhyperior/");
    }, 300)
  })

  $("#ice").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/ice.png")
      $("#fstPlcN").text("Mamoswine");
      $("#fstPlcDN").text("473");
      $("#fstPlcT").text("Ground/Ice");
      $("#fstPlcMaxCP").text("3328");
      $("#fstPlcMinCP").text("2899");
      $("#fstPlcMS").text("Powder Snow/Avalanche");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/jynx.png");
      $("#sndPlcN").text("Jynx");
      $("#sndPlcMaxCP").text("2555");
      $("#sndPlcMS").text("Confusion/Avalanche");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/jynx/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/articuno.png");
      $("#trdPlcN").text("Articuno");
      $("#trdPlcMaxCP").text("3051");
      $("#trdPlcMS").text("Frost Breath/Blizzard");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/articuno/");
    }, 300)
  })

  $("#normalType").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/normal.png")
      $("#fstPlcN").text("Mew");
      $("#fstPlcDN").text("151");
      $("#fstPlcT").text("Psychic");
      $("#fstPlcMaxCP").text("3265");
      $("#fstPlcMinCP").text("2851");
      $("#fstPlcMS").text("Pound/Psychic");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/slaking.png");
      $("#sndPlcN").text("Slaking");
      $("#sndPlcMaxCP").text("4431");
      $("#sndPlcMS").text("Yawn/Hyper Beam");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/slaking/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/ursaring.png");
      $("#trdPlcN").text("Ursaring");
      $("#trdPlcMaxCP").text("2945");
      $("#trdPlcMS").text("Counter/Hyper Beam");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/ursaring/");
    }, 300)
  })

  $("#poison").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/grasspoison.png")
      $("#fstPlcN").text("Roserade");
      $("#fstPlcDN").text("407");
      $("#fstPlcT").text("Grass/Poison");
      $("#fstPlcMaxCP").text("2971");
      $("#fstPlcMinCP").text("2570");
      $("#fstPlcMS").text("Razor Leaf/Grass Knot");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/gengar.png");
      $("#sndPlcN").text("Gengar");
      $("#sndPlcMaxCP").text("2878");
      $("#sndPlcMS").text("Shadow Claw/Sludge Bomb");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/gengar/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/muk.png");
      $("#trdPlcN").text("Muk");
      $("#trdPlcMaxCP").text("2757");
      $("#trdPlcMS").text("Acid/Gunk Shot");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/muk/");
    }, 300)
  })

  $("#psychic").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/psychic.png")
      $("#fstPlcN").text("Mewtwo");
      $("#fstPlcDN").text("150");
      $("#fstPlcT").text("Psychic");
      $("#fstPlcMaxCP").text("4178");
      $("#fstPlcMinCP").text("3697");
      $("#fstPlcMS").text("Psycho Cut/Shadow Ball");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/deoxys.png");
      $("#sndPlcN").text("Deoxys");
      $("#sndPlcMaxCP").text("3160");
      $("#sndPlcMS").text("Zen Headbutt/Hyper Beam");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/deoxys/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/alakazam.png");
      $("#trdPlcN").text("Alakazam");
      $("#trdPlcMaxCP").text("3057");
      $("#trdPlcMS").text("Confusion/Future Sight");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/alakazam/");
    }, 300)

  })

  $("#rock").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/rock.png")
      $("#fstPlcN").text("Rampardos");
      $("#fstPlcDN").text("409");
      $("#fstPlcT").text("Rock");
      $("#fstPlcMaxCP").text("3298");
      $("#fstPlcMinCP").text("2846");
      $("#fstPlcMS").text("Smack Down/Rock Slide");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/tyranitar.png");
      $("#sndPlcN").text("Tyranitar");
      $("#sndPlcMaxCP").text("3834");
      $("#sndPlcMS").text("Bite/Stone Edge");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/tyranitar/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/armaldo.png");
      $("#trdPlcN").text("Armaldo");
      $("#trdPlcMaxCP").text("2675");
      $("#trdPlcMS").text("Struggle Bug/Rock Blast");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/armaldo/");
    }, 300)
  })

  $("#steel").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/steel.png")
      $("#fstPlcN").text("Metagross");
      $("#fstPlcDN").text("376");
      $("#fstPlcT").text("Psychic/Steel");
      $("#fstPlcMaxCP").text("3001");
      $("#fstPlcMinCP").text("2600");
      $("#fstPlcMS").text("Bullet Punch/Meteor Mash");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/nagneton.png");
      $("#sndPlcN").text("Magneton");
      $("#sndPlcMaxCP").text("2485");
      $("#sndPlcMS").text("Thunder Shock/Zap Cannon");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/magneton/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/jirachi.png");
      $("#trdPlcN").text("Jirachi");
      $("#trdPlcMaxCP").text("3090");
      $("#trdPlcMS").text("Charge Beam/Doom Desire");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/jirachi/");
    }, 300)
  })

  $("#water").on("click", function (event) {
    setTimeout(function () {
      // First Place
      $("#fstplcimg").attr("src", "images/PokemonImg/water.png")
      $("#fstPlcN").text("Kyogre");
      $("#fstPlcDN").text("382");
      $("#fstPlcT").text("Water");
      $("#fstPlcMaxCP").text("4115");
      $("#fstPlcMinCP").text("3645");
      $("#fstPlcMS").text("Waterfall/Hydro Pump");
      // Second Place
      $("#sndPlc").attr("src", "images/PokemonImg/palkia.png");
      $("#sndPlcN").text("Palkia");
      $("#sndPlcMaxCP").text("4420");
      $("#sndPlcMS").text("Dragon Tail/Dragon Meteor");
      $("#sndPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/palkia/");
      // Third Place
      $("#trdPlc").attr("src", "images/PokemonImg/gyarados.png");
      $("#trdPlcN").text("Gyarados");
      $("#trdPlcMaxCP").text("3391");
      $("#trdPlcMS").text("Waterfall/Hydro Pump");
      $("#trdPlcWiki").attr("href", "https://rankedboost.com/pokemon-go/gyarados/");
    }, 300)
  })
});