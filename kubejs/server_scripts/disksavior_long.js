//东西很多的配方放这
ServerEvents.recipes(event => {
    const gtr = event.recipes.gtceu
    //流体钻机电解
    //————————————————————————————————————————————————————————————————————————————————mv
    //主世界
    gtr.electrolyzer('disksavior:mv_t0')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 614400',
            'gtceu:natural_gas 230400',
            'gtceu:oil_medium 307200',
            'gtceu:oil_light 384000',
            'gtceu:oil_heavy 230400',
            'gtceu:oil 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //月球
    gtr.electrolyzer('disksavior:mv_t1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 153600',
            'gtceu:helium 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //火星
    gtr.electrolyzer('disksavior:mv_t2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //金星
    gtr.electrolyzer('disksavior:mv_t3_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //水星
    gtr.electrolyzer('disksavior:mv_t3_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 230400'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //下界
    gtr.electrolyzer('disksavior:mv_t3_3')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 998400',
            'gtceu:natural_gas 537600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //谷神星
    gtr.electrolyzer('disksavior:mv_t4')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 307200',
            'gtceu:radon 230400',
            'gtceu:xenon 307200',
            'gtceu:krypton 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //木卫一
    gtr.electrolyzer('disksavior:mv_t5_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //木卫三
    gtr.electrolyzer('disksavior:mv_t5_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //冥王星
    gtr.electrolyzer('disksavior:mv_t6_1')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //土卫二
    gtr.electrolyzer('disksavior:mv_t6_2')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 307200',
            'gtceu:fluorine 153600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //土卫六
    gtr.electrolyzer('disksavior:mv_t6_3')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 307200',
            'gtceu:benzene 230400',
            'gtceu:charcoal_byproducts 153600'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //巴纳德C
    gtr.electrolyzer('disksavior:mv_t8')
        .notConsumable('1024x gtceu:mv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 307200'
        )
        .EUt(GTValues.VA[GTValues.HV])
        .duration(2000)
    //————————————————————————————————————————————————————————————————————————————————hv
    //主世界
    gtr.electrolyzer('disksavior:hv_t0')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 9830400',
            'gtceu:natural_gas 3686400',
            'gtceu:oil_medium 4915200',
            'gtceu:oil_light 6144000',
            'gtceu:oil_heavy 3686400',
            'gtceu:oil 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //月球
    gtr.electrolyzer('disksavior:hv_t1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 2457600',
            'gtceu:helium 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //火星
    gtr.electrolyzer('disksavior:hv_t2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //金星
    gtr.electrolyzer('disksavior:hv_t3_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //水星
    gtr.electrolyzer('disksavior:hv_t3_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 3686400'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //下界
    gtr.electrolyzer('disksavior:hv_t3_3')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 15974400',
            'gtceu:natural_gas 8601600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //谷神星
    gtr.electrolyzer('disksavior:hv_t4')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 4915200',
            'gtceu:radon 3686400',
            'gtceu:xenon 4915200',
            'gtceu:krypton 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //木卫一
    gtr.electrolyzer('disksavior:hv_t5_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //木卫三
    gtr.electrolyzer('disksavior:hv_t5_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //冥王星
    gtr.electrolyzer('disksavior:hv_t6_1')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //土卫二
    gtr.electrolyzer('disksavior:hv_t6_2')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 4915200',
            'gtceu:fluorine 2457600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //土卫六
    gtr.electrolyzer('disksavior:hv_t6_3')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 4915200',
            'gtceu:benzene 3686400',
            'gtceu:charcoal_byproducts 2457600'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //巴纳德C
    gtr.electrolyzer('disksavior:hv_t8')
        .notConsumable('1024x gtceu:hv_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 4915200'
        )
        .EUt(GTValues.VA[GTValues.EV])
        .duration(2000)
    //————————————————————————————————————————————————————————————————————————————————ev
    //主世界
    gtr.electrolyzer('disksavior:ev_t0')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 39321600',
            'gtceu:natural_gas 14745600',
            'gtceu:oil_medium 19660800',
            'gtceu:oil_light 24576000',
            'gtceu:oil_heavy 14745600',
            'gtceu:oil 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //月球
    gtr.electrolyzer('disksavior:ev_t1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 9830400',
            'gtceu:helium 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //火星
    gtr.electrolyzer('disksavior:ev_t2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //金星
    gtr.electrolyzer('disksavior:ev_t3_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //水星
    gtr.electrolyzer('disksavior:ev_t3_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 14745600'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //下界
    gtr.electrolyzer('disksavior:ev_t3_3')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 63897600',
            'gtceu:natural_gas 34406400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //谷神星
    gtr.electrolyzer('disksavior:ev_t4')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 19660800',
            'gtceu:radon 14745600',
            'gtceu:xenon 19660800',
            'gtceu:krypton 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //木卫一
    gtr.electrolyzer('disksavior:ev_t5_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //木卫三
    gtr.electrolyzer('disksavior:ev_t5_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //冥王星
    gtr.electrolyzer('disksavior:ev_t6_1')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //土卫二
    gtr.electrolyzer('disksavior:ev_t6_2')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 19660800',
            'gtceu:fluorine 9830400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //土卫六
    gtr.electrolyzer('disksavior:ev_t6_3')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 19660800',
            'gtceu:benzene 14745600',
            'gtceu:charcoal_byproducts 9830400'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //巴纳德C
    gtr.electrolyzer('disksavior:ev_t8')
        .notConsumable('1024x gtceu:ev_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 19660800'
        )
        .EUt(GTValues.VA[GTValues.IV])
        .duration(2000)
    //————————————————————————————————————————————————————————————————————————————————zpm
    //主世界
    gtr.electrolyzer('disksavior:zpm_t0')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('minecraft:dirt')
        .outputFluids(
            'gtceu:salt_water 2516582400',
            'gtceu:natural_gas 943718400',
            'gtceu:oil_medium 1258291200',
            'gtceu:oil_light 1572864000',
            'gtceu:oil_heavy 943718400',
            'gtceu:oil 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //月球
    gtr.electrolyzer('disksavior:zpm_t1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:moon_stone')
        .outputFluids(
            'gtceu:helium_3 629145600',
            'gtceu:helium 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //火星
    gtr.electrolyzer('disksavior:zpm_t2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mars_stone')
        .outputFluids(
            'gtceu:radon 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //金星
    gtr.electrolyzer('disksavior:zpm_t3_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:venus_stone')
        .outputFluids(
            'gtceu:sulfuric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //水星
    gtr.electrolyzer('disksavior:zpm_t3_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('ad_astra:mercury_stone')
        .outputFluids(
            'gtceu:deuterium 943718400'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //下界
    gtr.electrolyzer('disksavior:zpm_t3_3')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('minecraft:netherrack')
        .outputFluids(
            'minecraft:lava 4089446400',
            'gtceu:natural_gas 2202009600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //谷神星
    gtr.electrolyzer('disksavior:zpm_t4')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:ceresstone')
        .outputFluids(
            'gtceu:neon 1258291200',
            'gtceu:radon 943718400',
            'gtceu:xenon 1258291200',
            'gtceu:krypton 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //木卫一
    gtr.electrolyzer('disksavior:zpm_t5_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:iostone')
        .outputFluids(
            'gtceu:coal_gas 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //木卫三
    gtr.electrolyzer('disksavior:zpm_t5_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:ganymedestone')
        .outputFluids(
            'gtceu:hydrochloric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //冥王星
    gtr.electrolyzer('disksavior:zpm_t6_1')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:plutostone')
        .outputFluids(
            'gtceu:nitric_acid 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //土卫二
    gtr.electrolyzer('disksavior:zpm_t6_2')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:enceladusstone')
        .outputFluids(
            'gtceu:chlorine 1258291200',
            'gtceu:fluorine 629145600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //土卫六
    gtr.electrolyzer('disksavior:zpm_t6_3')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:titanstone')
        .outputFluids(
            'gtceu:methane 1258291200',
            'gtceu:benzene 943718400',
            'gtceu:charcoal_byproducts 629145600'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //巴纳德C
    gtr.electrolyzer('disksavior:UEV')
        .notConsumable('1024x gtceu:zpm_fluid_drilling_rig')
        .notConsumable('kubejs:barnarda_log')
        .outputFluids(
            'gtceu:unknowwater 1258291200'
        )
        .EUt(GTValues.VA[GTValues.UV])
        .duration(2000)
    //进阶无尽钻机钻全部维度流体
    gtr.chemical_reactor('disksavior:UEV_all')
        .notConsumable('gtceu:advanced_infinite_driller')
        .outputFluids(
            //主世界
            'gtceu:salt_water 40265318400',
            'gtceu:natural_gas 15099494400',
            'gtceu:oil_medium 20132659200',
            'gtceu:oil_light 25165824000',
            'gtceu:oil_heavy 15099494400',
            'gtceu:oil 20132659200',
            //月球
            'gtceu:helium_3 10066329600',
            'gtceu:helium 20132659200',
            //火星
            'gtceu:radon 20132659200',
            //金星
            'gtceu:sulfuric_acid 20132659200',
            //水星
            'gtceu:deuterium 15099494400',
            //下界
            'minecraft:lava 65431142400',
            'gtceu:natural_gas 35232153600',
            //谷神星
            'gtceu:neon 20132659200',
            'gtceu:radon 15099494400',
            'gtceu:xenon 20132659200',
            'gtceu:krypton 20132659200',
            //木卫一
            'gtceu:coal_gas 20132659200',
            //木卫三
            'gtceu:hydrochloric_acid 20132659200',
            //冥王星
            'gtceu:nitric_acid 20132659200',
            //土卫二
            'gtceu:chlorine 20132659200',
            'gtceu:fluorine 10066329600',
            //土卫六
            'gtceu:methane 20132659200',
            'gtceu:benzene 15099494400',
            'gtceu:charcoal_byproducts 10066329600',
            //巴纳德C
            'gtceu:unknowwater 20132659200'
        )
        .EUt(GTValues.VA[GTValues.UEV])
        .duration(16000)
    //鸿蒙之眼集大成配方
    //批处理16384倍
    //实际数值要-1，因为2147483648x会爆
    //集成了来自群友@aach.aic的鸿蒙之眼+
    gtr.cosmos_simulation('disksavior:cosmos_simulation_spuer_pro_max_plus_glodversion')
        .itemInputs('disksavior:quantum_chromodynamic_charge_super')
        .itemOutputs(
            '2147483647x gtceu:carbon_dust', '2147483647x gtceu:phosphorus_dust', '2147483647x gtceu:sulfur_dust', '2147483647x gtceu:selenium_dust', '2147483647x gtceu:iodine_dust', '2147483647x gtceu:boron_dust', '2147483647x gtceu:silicon_dust', '2147483647x gtceu:germanium_dust', '2147483647x gtceu:arsenic_dust', '2147483647x gtceu:antimony_dust', '2147483647x gtceu:tellurium_dust', '2147483647x gtceu:astatine_dust', '2147483647x gtceu:aluminium_dust', '2147483647x gtceu:gallium_dust', '2147483647x gtceu:indium_dust', '2147483647x gtceu:tin_dust', '2147483647x gtceu:thallium_dust', '2147483647x gtceu:lead_dust', '2147483647x gtceu:bismuth_dust', '2147483647x gtceu:polonium_dust', '2147483647x gtceu:titanium_dust', '2147483647x gtceu:vanadium_dust', '2147483647x gtceu:chromium_dust', '2147483647x gtceu:manganese_dust', '2147483647x gtceu:iron_dust', '2147483647x gtceu:cobalt_dust', '2147483647x gtceu:nickel_dust', '2147483647x gtceu:copper_dust', '2147483647x gtceu:zinc_dust', '2147483647x gtceu:zirconium_dust', '2147483647x gtceu:niobium_dust', '2147483647x gtceu:molybdenum_dust', '2147483647x gtceu:technetium_dust', '2147483647x gtceu:ruthenium_dust', '2147483647x gtceu:rhodium_dust', '2147483647x gtceu:palladium_dust', '2147483647x gtceu:silver_dust', '2147483647x gtceu:cadmium_dust', '2147483647x gtceu:hafnium_dust', '2147483647x gtceu:tantalum_dust', '2147483647x gtceu:tungsten_dust', '2147483647x gtceu:rhenium_dust', '2147483647x gtceu:osmium_dust', '2147483647x gtceu:iridium_dust', '2147483647x gtceu:platinum_dust', '2147483647x gtceu:gold_dust', '2147483647x gtceu:beryllium_dust', '2147483647x gtceu:magnesium_dust', '2147483647x gtceu:calcium_dust', '2147483647x gtceu:strontium_dust', '2147483647x gtceu:barium_dust', '2147483647x gtceu:radium_dust', '2147483647x gtceu:yttrium_dust', '2147483647x gtceu:lithium_dust', '2147483647x gtceu:sodium_dust', '2147483647x gtceu:potassium_dust', '2147483647x gtceu:rubidium_dust', '2147483647x gtceu:caesium_dust', '2147483647x gtceu:francium_dust', '2147483647x gtceu:scandium_dust', '2147483647x gtceu:actinium_dust', '2147483647x gtceu:thorium_dust', '2147483647x gtceu:protactinium_dust', '2147483647x gtceu:uranium_dust', '2147483647x gtceu:neptunium_dust', '2147483647x gtceu:plutonium_dust', '2147483647x gtceu:americium_dust', '2147483647x gtceu:curium_dust', '2147483647x gtceu:berkelium_dust', '2147483647x gtceu:californium_dust', '2147483647x gtceu:einsteinium_dust', '2147483647x gtceu:fermium_dust', '2147483647x gtceu:mendelevium_dust', '2147483647x gtceu:nobelium_dust', '2147483647x gtceu:lawrencium_dust', '2147483647x gtceu:lanthanum_dust', '2147483647x gtceu:cerium_dust', '2147483647x gtceu:praseodymium_dust', '2147483647x gtceu:neodymium_dust', '2147483647x gtceu:promethium_dust', '2147483647x gtceu:samarium_dust', '2147483647x gtceu:europium_dust', '2147483647x gtceu:gadolinium_dust', '2147483647x gtceu:terbium_dust', '2147483647x gtceu:dysprosium_dust', '2147483647x gtceu:holmium_dust', '2147483647x gtceu:erbium_dust', '2147483647x gtceu:thulium_dust', '2147483647x gtceu:ytterbium_dust', '2147483647x gtceu:lutetium_dust', '2147483647x gtceu:rutherfordium_dust', '2147483647x gtceu:dubnium_dust', '2147483647x gtceu:seaborgium_dust', '2147483647x gtceu:bohrium_dust', '2147483647x gtceu:hassium_dust', '2147483647x gtceu:meitnerium_dust', '2147483647x gtceu:darmstadtium_dust', '2147483647x gtceu:roentgenium_dust', '2147483647x gtceu:copernicium_dust', '2147483647x gtceu:nihonium_dust', '2147483647x gtceu:flerovium_dust', '2147483647x gtceu:moscovium_dust', '2147483647x gtceu:livermorium_dust', '2147483647x gtceu:tennessine_dust', '2147483647x gtceu:oganesson_dust', '2147483647x gtceu:jasper_dust', '2147483647x gtceu:naquadah_dust', '2147483647x gtceu:enriched_naquadah_dust', '2147483647x gtceu:naquadria_dust', '2147483647x gtceu:duranium_dust', '2147483647x gtceu:tritanium_dust', '2147483647x gtceu:mithril_dust', '2147483647x gtceu:orichalcum_dust', '2147483647x gtceu:enderium_dust', '2147483647x gtceu:adamantine_dust', '2147483647x gtceu:vibranium_dust', '2147483647x gtceu:infuscolium_dust', '2147483647x gtceu:taranium_dust', '2147483647x gtceu:draconium_dust', '2147483647x gtceu:starmetal_dust',    //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '268435456x gtceu:white_dwarf_mtter_dust', '268435456x gtceu:black_dwarf_mtter_dust', '2147483647x ae2:sky_dust', '2147483647x gtceu:trinium_dust', '2147483647x gtceu:plutonium_241_dust', '2147483647x gtceu:titanium_50_dust', '2147483647x gtceu:copper76_dust', '2147483647x gtceu:uranium_235_dust', '2147483647x gtceu:perditio_crystal_dust', '2147483647x gtceu:earth_crystal_dust', '2147483647x gtceu:ignis_crystal_dust', '2147483647x gtceu:tartarite_dust', '2147483647x gtceu:uruium_dust', '2147483647x gtceu:force_dust', '2147483647x gtceu:alien_algae_dust', '2147483647x gtceu:bloodstone_dust', '2147483647x minecraft:netherite_scrap', '2147483647x gtceu:purified_tengam_dust', '2147483647x gtceu:quantanium_dust', '2147483647x gtceu:bedrock_dust', '2147483647x gtceu:damascus_steel_dust', '2147483647x avaritia:neutron_pile', '2147483647x gtceu:certus_quartz_dust', '2147483647x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 4194304', 'gtceu:raw_star_matter_plasma 21474836480', 'gtceu:quark_gluon_plasma 21474836480', 'gtceu:heavy_quark_degenerate_matter_plasma 21474836480', 'gtceu:neutronium 214748364800', 'gtceu:heavy_lepton_mixture 214748364800', 'gtceu:hydrogen 2147483648000', 'gtceu:nitrogen 2147483648000', 'gtceu:oxygen 2147483648000', 'gtceu:fluorine 2147483648000', 'gtceu:chlorine 2147483648000', 'gtceu:bromine 2147483648000', 'gtceu:helium 2147483648000', 'gtceu:neon 2147483648000', 'gtceu:argon 2147483648000', 'gtceu:krypton 2147483648000', 'gtceu:xenon 2147483648000', 'gtceu:radon 2147483648000', 'gtceu:mercury 2147483648000', 'gtceu:deuterium 2147483648000', 'gtceu:tritium 2147483648000', 'gtceu:helium_3 2147483648000', 'gtceu:unknowwater 2147483648000', 'gtceu:uu_matter 2147483648000'
        )
        .duration(19660800)
        .inputFluids('gtceu:cosmic_element 16777216000')
    //化反鸿蒙
    //集成了来自群友@aach.aic的鸿蒙之眼+
    gtr.chemical_reactor('disksavior:cosmos_simulation_1')
        .itemInputs('kubejs:quantum_chromodynamic_charge')
        .inputFluids(
            'gtceu:cosmic_element 1024000', 'gtceu:hydrogen 1024000000', 'gtceu:helium 1024000000'
        )
        .itemOutputs(
            '131072x gtceu:carbon_dust', '131072x gtceu:phosphorus_dust', '131072x gtceu:sulfur_dust', '131072x gtceu:selenium_dust', '131072x gtceu:iodine_dust', '131072x gtceu:boron_dust', '131072x gtceu:silicon_dust', '131072x gtceu:germanium_dust', '131072x gtceu:arsenic_dust', '131072x gtceu:antimony_dust', '131072x gtceu:tellurium_dust', '131072x gtceu:astatine_dust', '131072x gtceu:aluminium_dust', '131072x gtceu:gallium_dust', '131072x gtceu:indium_dust', '131072x gtceu:tin_dust', '131072x gtceu:thallium_dust', '131072x gtceu:lead_dust', '131072x gtceu:bismuth_dust', '131072x gtceu:polonium_dust', '131072x gtceu:titanium_dust', '131072x gtceu:vanadium_dust', '131072x gtceu:chromium_dust', '131072x gtceu:manganese_dust', '131072x gtceu:iron_dust', '131072x gtceu:cobalt_dust', '131072x gtceu:nickel_dust', '131072x gtceu:copper_dust', '131072x gtceu:zinc_dust', '131072x gtceu:zirconium_dust', '131072x gtceu:niobium_dust', '131072x gtceu:molybdenum_dust', '131072x gtceu:technetium_dust', '131072x gtceu:ruthenium_dust', '131072x gtceu:rhodium_dust', '131072x gtceu:palladium_dust', '131072x gtceu:silver_dust', '131072x gtceu:cadmium_dust', '131072x gtceu:hafnium_dust', '131072x gtceu:tantalum_dust', '131072x gtceu:tungsten_dust', '131072x gtceu:rhenium_dust', '131072x gtceu:osmium_dust', '131072x gtceu:iridium_dust', '131072x gtceu:platinum_dust', '131072x gtceu:gold_dust', '131072x gtceu:beryllium_dust', '131072x gtceu:magnesium_dust', '131072x gtceu:calcium_dust', '131072x gtceu:strontium_dust', '131072x gtceu:barium_dust', '131072x gtceu:radium_dust', '131072x gtceu:yttrium_dust', '131072x gtceu:lithium_dust', '131072x gtceu:sodium_dust', '131072x gtceu:potassium_dust', '131072x gtceu:rubidium_dust', '131072x gtceu:caesium_dust', '131072x gtceu:francium_dust', '131072x gtceu:scandium_dust', '131072x gtceu:actinium_dust', '131072x gtceu:thorium_dust', '131072x gtceu:protactinium_dust', '131072x gtceu:uranium_dust', '131072x gtceu:neptunium_dust', '131072x gtceu:plutonium_dust', '131072x gtceu:americium_dust', '131072x gtceu:curium_dust', '131072x gtceu:berkelium_dust', '131072x gtceu:californium_dust', '131072x gtceu:einsteinium_dust', '131072x gtceu:fermium_dust', '131072x gtceu:mendelevium_dust', '131072x gtceu:nobelium_dust', '131072x gtceu:lawrencium_dust', '131072x gtceu:lanthanum_dust', '131072x gtceu:cerium_dust', '131072x gtceu:praseodymium_dust', '131072x gtceu:neodymium_dust', '131072x gtceu:promethium_dust', '131072x gtceu:samarium_dust', '131072x gtceu:europium_dust', '131072x gtceu:gadolinium_dust', '131072x gtceu:terbium_dust', '131072x gtceu:dysprosium_dust', '131072x gtceu:holmium_dust', '131072x gtceu:erbium_dust', '131072x gtceu:thulium_dust', '131072x gtceu:ytterbium_dust', '131072x gtceu:lutetium_dust', '131072x gtceu:rutherfordium_dust', '131072x gtceu:dubnium_dust', '131072x gtceu:seaborgium_dust', '131072x gtceu:bohrium_dust', '131072x gtceu:hassium_dust', '131072x gtceu:meitnerium_dust', '131072x gtceu:darmstadtium_dust', '131072x gtceu:roentgenium_dust', '131072x gtceu:copernicium_dust', '131072x gtceu:nihonium_dust', '131072x gtceu:flerovium_dust', '131072x gtceu:moscovium_dust', '131072x gtceu:livermorium_dust', '131072x gtceu:tennessine_dust', '131072x gtceu:oganesson_dust', '131072x gtceu:jasper_dust', '131072x gtceu:naquadah_dust', '131072x gtceu:enriched_naquadah_dust', '131072x gtceu:naquadria_dust', '131072x gtceu:duranium_dust', '131072x gtceu:tritanium_dust', '131072x gtceu:mithril_dust', '131072x gtceu:orichalcum_dust', '131072x gtceu:enderium_dust', '131072x gtceu:adamantine_dust', '131072x gtceu:vibranium_dust', '131072x gtceu:infuscolium_dust', '131072x gtceu:taranium_dust', '131072x gtceu:draconium_dust', '131072x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '16384x gtceu:white_dwarf_mtter_dust', '16384x gtceu:black_dwarf_mtter_dust', '131072x ae2:sky_dust', '131072x gtceu:trinium_dust', '131072x gtceu:plutonium_241_dust', '131072x gtceu:titanium_50_dust', '131072x gtceu:copper76_dust', '131072x gtceu:uranium_235_dust', '131072x gtceu:perditio_crystal_dust', '131072x gtceu:earth_crystal_dust', '131072x gtceu:ignis_crystal_dust', '131072x gtceu:tartarite_dust', '131072x gtceu:uruium_dust', '131072x gtceu:force_dust', '131072x gtceu:alien_algae_dust', '131072x gtceu:bloodstone_dust', '131072x minecraft:netherite_scrap', '131072x gtceu:purified_tengam_dust', '131072x gtceu:quantanium_dust', '131072x gtceu:bedrock_dust', '131072x gtceu:damascus_steel_dust', '131072x avaritia:neutron_pile', '131072x gtceu:certus_quartz_dust', '131072x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 256', 'gtceu:raw_star_matter_plasma 1310720', 'gtceu:quark_gluon_plasma 1310720', 'gtceu:heavy_quark_degenerate_matter_plasma 1310720', 'gtceu:neutronium 13107200', 'gtceu:heavy_lepton_mixture 13107200', 'gtceu:hydrogen 131072000', 'gtceu:nitrogen 131072000', 'gtceu:oxygen 131072000', 'gtceu:fluorine 131072000', 'gtceu:chlorine 131072000', 'gtceu:bromine 131072000', 'gtceu:helium 131072000', 'gtceu:neon 131072000', 'gtceu:argon 131072000', 'gtceu:krypton 131072000', 'gtceu:xenon 131072000', 'gtceu:radon 131072000', 'gtceu:mercury 131072000', 'gtceu:deuterium 131072000', 'gtceu:tritium 131072000', 'gtceu:helium_3 131072000', 'gtceu:unknowwater 131072000', 'gtceu:uu_matter 131072000'
        )
        .EUt(5277655810867200)
        .duration(1200)
    //化反鸿蒙批处理16384倍
    //实际数值要-1，因为2147483648x会爆
    //集成了来自群友@aach.aic的鸿蒙之眼+
    //数值十分爆炸
    //相比普通版不加耗电和耗时，因为鸿蒙之眼的耗电和耗时是锁死的，所以这个其实还挺还原
    gtr.chemical_reactor('disksavior:cosmos_simulation_spuer_pro_max_plus_glodversion_16384')
        .itemInputs('disksavior:quantum_chromodynamic_charge_super')
        .inputFluids(
            'gtceu:cosmic_element 16777216000', 'gtceu:hydrogen 16777216000000', 'gtceu:helium 16777216000000'
        )
        .itemOutputs(
            '2147483647x gtceu:carbon_dust', '2147483647x gtceu:phosphorus_dust', '2147483647x gtceu:sulfur_dust', '2147483647x gtceu:selenium_dust', '2147483647x gtceu:iodine_dust', '2147483647x gtceu:boron_dust', '2147483647x gtceu:silicon_dust', '2147483647x gtceu:germanium_dust', '2147483647x gtceu:arsenic_dust', '2147483647x gtceu:antimony_dust', '2147483647x gtceu:tellurium_dust', '2147483647x gtceu:astatine_dust', '2147483647x gtceu:aluminium_dust', '2147483647x gtceu:gallium_dust', '2147483647x gtceu:indium_dust', '2147483647x gtceu:tin_dust', '2147483647x gtceu:thallium_dust', '2147483647x gtceu:lead_dust', '2147483647x gtceu:bismuth_dust', '2147483647x gtceu:polonium_dust', '2147483647x gtceu:titanium_dust', '2147483647x gtceu:vanadium_dust', '2147483647x gtceu:chromium_dust', '2147483647x gtceu:manganese_dust', '2147483647x gtceu:iron_dust', '2147483647x gtceu:cobalt_dust', '2147483647x gtceu:nickel_dust', '2147483647x gtceu:copper_dust', '2147483647x gtceu:zinc_dust', '2147483647x gtceu:zirconium_dust', '2147483647x gtceu:niobium_dust', '2147483647x gtceu:molybdenum_dust', '2147483647x gtceu:technetium_dust', '2147483647x gtceu:ruthenium_dust', '2147483647x gtceu:rhodium_dust', '2147483647x gtceu:palladium_dust', '2147483647x gtceu:silver_dust', '2147483647x gtceu:cadmium_dust', '2147483647x gtceu:hafnium_dust', '2147483647x gtceu:tantalum_dust', '2147483647x gtceu:tungsten_dust', '2147483647x gtceu:rhenium_dust', '2147483647x gtceu:osmium_dust', '2147483647x gtceu:iridium_dust', '2147483647x gtceu:platinum_dust', '2147483647x gtceu:gold_dust', '2147483647x gtceu:beryllium_dust', '2147483647x gtceu:magnesium_dust', '2147483647x gtceu:calcium_dust', '2147483647x gtceu:strontium_dust', '2147483647x gtceu:barium_dust', '2147483647x gtceu:radium_dust', '2147483647x gtceu:yttrium_dust', '2147483647x gtceu:lithium_dust', '2147483647x gtceu:sodium_dust', '2147483647x gtceu:potassium_dust', '2147483647x gtceu:rubidium_dust', '2147483647x gtceu:caesium_dust', '2147483647x gtceu:francium_dust', '2147483647x gtceu:scandium_dust', '2147483647x gtceu:actinium_dust', '2147483647x gtceu:thorium_dust', '2147483647x gtceu:protactinium_dust', '2147483647x gtceu:uranium_dust', '2147483647x gtceu:neptunium_dust', '2147483647x gtceu:plutonium_dust', '2147483647x gtceu:americium_dust', '2147483647x gtceu:curium_dust', '2147483647x gtceu:berkelium_dust', '2147483647x gtceu:californium_dust', '2147483647x gtceu:einsteinium_dust', '2147483647x gtceu:fermium_dust', '2147483647x gtceu:mendelevium_dust', '2147483647x gtceu:nobelium_dust', '2147483647x gtceu:lawrencium_dust', '2147483647x gtceu:lanthanum_dust', '2147483647x gtceu:cerium_dust', '2147483647x gtceu:praseodymium_dust', '2147483647x gtceu:neodymium_dust', '2147483647x gtceu:promethium_dust', '2147483647x gtceu:samarium_dust', '2147483647x gtceu:europium_dust', '2147483647x gtceu:gadolinium_dust', '2147483647x gtceu:terbium_dust', '2147483647x gtceu:dysprosium_dust', '2147483647x gtceu:holmium_dust', '2147483647x gtceu:erbium_dust', '2147483647x gtceu:thulium_dust', '2147483647x gtceu:ytterbium_dust', '2147483647x gtceu:lutetium_dust', '2147483647x gtceu:rutherfordium_dust', '2147483647x gtceu:dubnium_dust', '2147483647x gtceu:seaborgium_dust', '2147483647x gtceu:bohrium_dust', '2147483647x gtceu:hassium_dust', '2147483647x gtceu:meitnerium_dust', '2147483647x gtceu:darmstadtium_dust', '2147483647x gtceu:roentgenium_dust', '2147483647x gtceu:copernicium_dust', '2147483647x gtceu:nihonium_dust', '2147483647x gtceu:flerovium_dust', '2147483647x gtceu:moscovium_dust', '2147483647x gtceu:livermorium_dust', '2147483647x gtceu:tennessine_dust', '2147483647x gtceu:oganesson_dust', '2147483647x gtceu:jasper_dust', '2147483647x gtceu:naquadah_dust', '2147483647x gtceu:enriched_naquadah_dust', '2147483647x gtceu:naquadria_dust', '2147483647x gtceu:duranium_dust', '2147483647x gtceu:tritanium_dust', '2147483647x gtceu:mithril_dust', '2147483647x gtceu:orichalcum_dust', '2147483647x gtceu:enderium_dust', '2147483647x gtceu:adamantine_dust', '2147483647x gtceu:vibranium_dust', '2147483647x gtceu:infuscolium_dust', '2147483647x gtceu:taranium_dust', '2147483647x gtceu:draconium_dust', '2147483647x gtceu:starmetal_dust',
            //下面的是来自群友@aach.aic 的鸿蒙之眼+，此处已集成
            '268435456x gtceu:white_dwarf_mtter_dust', '268435456x gtceu:black_dwarf_mtter_dust', '2147483647x ae2:sky_dust', '2147483647x gtceu:trinium_dust', '2147483647x gtceu:plutonium_241_dust', '2147483647x gtceu:titanium_50_dust', '2147483647x gtceu:copper76_dust', '2147483647x gtceu:uranium_235_dust', '2147483647x gtceu:perditio_crystal_dust', '2147483647x gtceu:earth_crystal_dust', '2147483647x gtceu:ignis_crystal_dust', '2147483647x gtceu:tartarite_dust', '2147483647x gtceu:uruium_dust', '2147483647x gtceu:force_dust', '2147483647x gtceu:alien_algae_dust', '2147483647x gtceu:bloodstone_dust', '2147483647x minecraft:netherite_scrap', '2147483647x gtceu:purified_tengam_dust', '2147483647x gtceu:quantanium_dust', '2147483647x gtceu:bedrock_dust', '2147483647x gtceu:damascus_steel_dust', '2147483647x avaritia:neutron_pile', '2147483647x gtceu:certus_quartz_dust', '2147483647x ae2:fluix_dust'
        )
        .outputFluids(
            'gtceu:spacetime 4194304', 'gtceu:raw_star_matter_plasma 21474836480', 'gtceu:quark_gluon_plasma 21474836480', 'gtceu:heavy_quark_degenerate_matter_plasma 21474836480', 'gtceu:neutronium 214748364800', 'gtceu:heavy_lepton_mixture 214748364800', 'gtceu:hydrogen 2147483648000', 'gtceu:nitrogen 2147483648000', 'gtceu:oxygen 2147483648000', 'gtceu:fluorine 2147483648000', 'gtceu:chlorine 2147483648000', 'gtceu:bromine 2147483648000', 'gtceu:helium 2147483648000', 'gtceu:neon 2147483648000', 'gtceu:argon 2147483648000', 'gtceu:krypton 2147483648000', 'gtceu:xenon 2147483648000', 'gtceu:radon 2147483648000', 'gtceu:mercury 2147483648000', 'gtceu:deuterium 2147483648000', 'gtceu:tritium 2147483648000', 'gtceu:helium_3 2147483648000', 'gtceu:unknowwater 2147483648000', 'gtceu:uu_matter 2147483648000'
        )
        .EUt(5277655810867200)
        .duration(1200)
    //太空电梯资源采集全出
    const space_ores1 = ['280x gtceu:tetrahedrite_ore', '140x gtceu:copper_ore', '60x gtceu:bentonite_ore', '40x gtceu:magnetite_ore', '40x gtceu:olivine_ore', '20x gtceu:glauconite_sand_ore', '180x gtceu:almandine_ore', '120x gtceu:pyrope_ore', '60x gtceu:sapphire_ore', '60x gtceu:green_sapphire_ore', '70x gtceu:stibnite_ore', '120x gtceu:uraninite_ore', '90x gtceu:bastnasite_ore', '30x gtceu:molybdenum_ore', '60x gtceu:goethite_ore', '240x gtceu:yellow_limonite_ore', '240x gtceu:hematite_ore', '120x gtceu:malachite_ore', '120x gtceu:soapstone_ore', '80x gtceu:talc_ore', '80x gtceu:glauconite_sand_ore', '40x gtceu:pentlandite_ore', '30x gtceu:neodymium_ore', '60x gtceu:monazite_ore', '180x gtceu:redstone_ore', '120x gtceu:ruby_ore', '60x gtceu:grossular_ore', '40x gtceu:spessartine_ore', '40x gtceu:pyrolusite_ore', '20x gtceu:tantalite_ore', '250x gtceu:chalcopyrite_ore', '10x gtceu:zeolite_ore', '10x gtceu:cassiterite_ore', '50x gtceu:realgar_ore', '60x gtceu:cinnabar_ore', '80x ae2:sky_stone_block', '120x gtceu:saltpeter_ore', '80x gtceu:diatomite_ore', '80x gtceu:electrotine_ore', '40x gtceu:alunite_ore', '240x gtceu:coal_ore', '40x gtceu:rubidium_ore', '90x gtceu:beryllium_ore', '120x gtceu:emerald_ore', '40x gtceu:chalcopyrite_ore', '160x gtceu:iron_ore', '160x gtceu:pyrite_ore', '160x gtceu:copper_ore', '60x gtceu:grossular_ore', '40x gtceu:pyrolusite_ore', '20x gtceu:tantalite_ore', '240x gtceu:magnetite_ore', '160x gtceu:vanadium_magnetite_ore', '80x gtceu:gold_ore', '120x gtceu:lazurite_ore', '80x gtceu:sodalite_ore', '80x gtceu:lapis_ore', '40x gtceu:calcite_ore', '150x gtceu:wulfenite_ore', '30x gtceu:calorite_ore', '120x gtceu:galena_ore', '80x gtceu:silver_ore', '40x gtceu:lead_ore', '100x gtceu:molybdenite_ore', '50x gtceu:molybdenum_ore', '50x gtceu:powellite_ore', '90x gtceu:goethite_ore', '60x gtceu:yellow_limonite_ore', '60x gtceu:kyanite_ore', '40x gtceu:mica_ore', '40x gtceu:bauxite_ore', '20x gtceu:pollucite_ore', '120x gtceu:quartzite_ore', '80x gtceu:certus_quartz_ore', '140x gtceu:zircon_ore', '160x gtceu:cassiterite_ore', '60x gtceu:hematite_ore', '30x gtceu:gold_ore', '40x gtceu:barite_ore', '120x gtceu:red_garnet_ore', '80x gtceu:yellow_garnet_ore', '80x gtceu:amethyst_ore', '40x gtceu:opal_ore', '20x gtceu:alien_algae_ore', '210x gtceu:blue_topaz_ore', '140x gtceu:topaz_ore', '240x gtceu:basaltic_mineral_sand_ore', '160x gtceu:granitic_mineral_sand_ore', '160x gtceu:fullers_earth_ore', '80x gtceu:gypsum_ore', '150x gtceu:rock_salt_ore', '10x gtceu:salt_ore', '50x gtceu:lepidolite_ore', '50x gtceu:spodumene_ore', '140x gtceu:chalcocite_ore', '70x gtceu:bornite_ore', '180x gtceu:redstone_ore', '120x gtceu:ruby_ore', '60x gtceu:cinnabar_ore', '240x gtceu:nether_quartz_ore', '80x gtceu:quartzite_ore', '50x minecraft:ancient_debris', '120x gtceu:apatite_ore', '80x gtceu:tricalcium_phosphate_ore', '40x gtceu:pyrochlore_ore', '300x gtceu:sulfur_ore', '200x gtceu:pyrite_ore', '100x gtceu:sphalerite_ore', '180x gtceu:magnetite_ore', '120x gtceu:vanadium_magnetite_ore', '240x gtceu:cassiterite_sand_ore', '160x gtceu:garnet_sand_ore', '160x gtceu:asbestos_ore', '80x gtceu:diatomite_ore', '240x gtceu:oilsands_ore', '60x gtceu:gold_ore', '80x gtceu:infused_gold_ore', '160x gtceu:bauxite_ore', '80x gtceu:ilmenite_ore', '80x gtceu:aluminium_ore', '60x gtceu:bornite_ore', '40x gtceu:cooperite_ore', '120x gtceu:graphite_ore', '80x gtceu:diamond_ore', '40x gtceu:coal_ore', '40x gtceu:titanium_ore', '120x gtceu:garnierite_ore', '80x gtceu:nickel_ore', '80x gtceu:cobaltite_ore', '40x gtceu:pentlandite_ore', '40x gtceu:platinum_ore', '20x gtceu:palladium_ore', '120x gtceu:scheelite_ore', '80x gtceu:tungstate_ore', '40x gtceu:lithium_ore', '20x gtceu:tellurium_ore', '30x gtceu:tungsten_ore', '180x gtceu:pitchblende_ore', '180x gtceu:naquadah_ore', '120x gtceu:chromite_ore', '60x gtceu:plutonium_ore', '30x gtceu:enriched_naquadah_ore', '90x gtceu:trinium_compound_ore', '30x gtceu:indium_ore']
    const space_ores2 = ['20x gtceu:jasper_ore', '140x gtceu:red_garnet_ore', '60x gtceu:topaz_ore', '40x gtceu:emerald_ore', '40x gtceu:amethyst_ore', '20x gtceu:celestine_ore']
    const space_ores3 = ['140x gtceu:iron_ore', '140x gtceu:tin_ore', '60x gtceu:nickel_ore', '60x gtceu:uruium_ore', '40x gtceu:force_ore', '20x gtceu:cobalt_ore', '120x gtceu:bloodstone_ore', '80x gtceu:redstone_ore', '120x gtceu:red_garnet_ore', '40x gtceu:gravel_ruby_ore', '40x gtceu:almandine_ore', '40x gtceu:pyrope_ore']
    const space_ores4 = ['80x gtceu:naquadah_ore', '40x gtceu:adamantine_compounds_ore', '60x gtceu:rare_earth_metal_ore', '40x gtceu:monazite_ore', '40x gtceu:bastnasite_ore', '20x gtceu:enriched_naquadah_ore', '40x gtceu:earth_crystal_ore', '40x gtceu:ignis_crystal_ore', '80x gtceu:uraninite_ore', '40x gtceu:orichalcum_ore', '60x gtceu:mithril_ore', '80x gtceu:salt_ore']
    const space_ores5 = ['80x gtceu:enderium_ore', '120x gtceu:sodalite_ore', '60x gtceu:celestine_ore', '80x gtceu:lapis_ore', '60x gtceu:bauxite_ore', '40x gtceu:pitchblende_ore', '40x gtceu:silver_ore', '60x gtceu:andesite_platinum_ore', '60x gtceu:tartarite_ore', '80x gtceu:vibranium_ore', '120x gtceu:aluminium_ore', '120x gtceu:iron_ore']
    const space_ores6 = ['12x gtceu:lazurite_ore', '80x gtceu:sapphire_ore', '60x gtceu:starmetal_ore', '80x gtceu:green_sapphire_ore', '120x gtceu:yellow_garnet_ore', '80x gtceu:pollucite_ore']
    gtr.miner_module('disksavior:space_ore_1_spuer')
        .notConsumable('64x kubejs:space_drone_mk1')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1)
        .EUt(GTValues.VA[GTValues.ZPM] * 4)
        .duration(9600 / 4)
    gtr.miner_module('disksavior:space_ore_2_spuer')
        .notConsumable('64x kubejs:space_drone_mk2')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1.concat(space_ores2))
        .EUt(GTValues.VA[GTValues.ZPM] * 16)
        .duration(9600 / 16)
    gtr.miner_module('disksavior:space_ore_3_spuer')
        .notConsumable('64x kubejs:space_drone_mk3')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1.concat(space_ores2, space_ores3))
        .EUt(GTValues.VA[GTValues.ZPM] * 64)
        .duration(9600 / 64)
    gtr.miner_module('disksavior:space_ore_4_spuer')
        .notConsumable('64x kubejs:space_drone_mk4')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1.concat(space_ores2, space_ores3, space_ores4))
        .EUt(GTValues.VA[GTValues.ZPM] * 256)
        .duration(9600 / 256)
    gtr.miner_module('disksavior:space_ore_5_spuer')
        .notConsumable('64x kubejs:space_drone_mk5')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1.concat(space_ores2, space_ores3, space_ores4, space_ores5))
        .EUt(GTValues.VA[GTValues.ZPM] * 1024)
        .duration(9600 / 1024)
    gtr.miner_module('disksavior:space_ore_6_spuer')
        .notConsumable('64x kubejs:space_drone_mk6')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .itemOutputs(space_ores1.concat(space_ores2, space_ores3, space_ores4, space_ores5, space_ores6))
        .EUt(GTValues.VA[GTValues.ZPM] * 4096)
        .duration(9600 / 4096)
    //此处的数组名的数字指的是该数字+1的级别太空无人机可采集
    const space_fluids = ['gtceu:hydrogen 1000000', 'gtceu:helium 1000000', 'gtceu:nitrogen 1000000', 'gtceu:methane 1000000', 'gtceu:sulfur_dioxide 1000000', 'gtceu:carbon_dioxide 1000000', 'gtceu:nitrogen_dioxide 1000000', 'gtceu:ammonia 1000000', 'gtceu:chlorine 1000000', 'gtceu:fluorine 1000000', 'gtceu:carbon_monoxide 1000000', 'gtceu:oxygen 1000000']
    const space_fluid1s = ['gtceu:unknowwater 10000', 'gtceu:neon 100000', 'gtceu:argon 100000', 'gtceu:krypton 100000', 'gtceu:xenon 100000', 'gtceu:radon 100000', 'gtceu:helium_3 100000']
    const space_fluid2s = ['gtceu:deuterium 100000', 'gtceu:tritium 100000', 'gtceu:heavy_fuel 100000', 'gtceu:light_fuel 100000', 'gtceu:naphtha 100000', 'gtceu:refinery_gas 100000', 'gtceu:coal_gas 100000', 'gtceu:bromine 100000', 'gtceu:barnarda_air 100000']
    const space_fluid5s = ['gtceu:white_dwarf_mtter 100000', 'gtceu:black_dwarf_mtter 100000']
    gtr.drilling_module('disksavior:space_fluid_1_spuer')
        .notConsumable('64x kubejs:space_drone_mk1')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids)
        .EUt(GTValues.VA[GTValues.ZPM] * 4)
        .duration(9600 / 4)
    gtr.drilling_module('disksavior:space_fluid_2_spuer')
        .notConsumable('64x kubejs:space_drone_mk2')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids.concat(space_fluid1s))
        .EUt(GTValues.VA[GTValues.ZPM] * 16)
        .duration(9600 / 16)
    gtr.drilling_module('disksavior:space_fluid_3_spuer')
        .notConsumable('64x kubejs:space_drone_mk3')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids.concat(space_fluid1s, space_fluid2s))
        .EUt(GTValues.VA[GTValues.ZPM] * 64)
        .duration(9600 / 64)
    gtr.drilling_module('disksavior:space_fluid_4_spuer')
        .notConsumable('64x kubejs:space_drone_mk4')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids.concat(space_fluid1s, space_fluid2s))
        .EUt(GTValues.VA[GTValues.ZPM] * 256)
        .duration(9600 / 256)
    gtr.drilling_module('disksavior:space_fluid_5_spuer')
        .notConsumable('64x kubejs:space_drone_mk5')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids.concat(space_fluid1s, space_fluid2s))
        .EUt(GTValues.VA[GTValues.ZPM] * 1024)
        .duration(9600 / 1024)
    gtr.drilling_module('disksavior:space_fluid_6_spuer')
        .notConsumable('64x kubejs:space_drone_mk6')
        .notConsumable('32x gtceu:space_elevator')
        .inputFluids('gtceu:steam 185254')
        .outputFluids(space_fluids.concat(space_fluid1s, space_fluid2s, space_fluid5s))
        .EUt(GTValues.VA[GTValues.ZPM] * 4096)
        .duration(9600 / 4096)
    //原始虚空采矿机电解
    //68
    const overworld = ['16384x gtceu:raw_pyrite', '16384x gtceu:raw_lazurite', '16384x gtceu:raw_lepidolite', '16384x gtceu:raw_salt', '16384x gtceu:raw_apatite', '16384x gtceu:raw_oilsands', '16384x gtceu:raw_silver', '16384x gtceu:raw_hematite', '16384x gtceu:raw_almandine', '16384x gtceu:raw_fullers_earth', '16384x gtceu:raw_lead', '16384x gtceu:raw_lapis', '16384x gtceu:raw_red_garnet', '16384x gtceu:raw_mica', '16384x gtceu:raw_vanadium_magnetite', '16384x gtceu:raw_calcite', '16384x gtceu:raw_amethyst', '16384x gtceu:raw_malachite', '16384x gtceu:raw_garnet_sand', '16384x gtceu:raw_yellow_limonite', '16384x gtceu:raw_magnetite', '16384x gtceu:raw_galena', '16384x gtceu:raw_diatomite', '16384x gtceu:raw_spessartine', '16384x gtceu:raw_glauconite_sand', '16384x minecraft:raw_copper', '16384x gtceu:raw_rock_salt', '16384x gtceu:raw_graphite', '16384x gtceu:raw_cinnabar', '16384x gtceu:raw_diamond', '16384x gtceu:raw_cassiterite_sand', '16384x minecraft:raw_gold', '16384x gtceu:raw_redstone', '16384x gtceu:raw_chalcopyrite', '16384x gtceu:raw_goethite', '16384x gtceu:raw_tantalite', '16384x gtceu:raw_coal', '16384x gtceu:raw_yellow_garnet', '16384x gtceu:raw_garnierite', '16384x minecraft:raw_iron', '16384x gtceu:raw_kyanite', '16384x gtceu:raw_pollucite', '16384x gtceu:raw_zeolite', '16384x gtceu:raw_ruby', '16384x gtceu:raw_asbestos', '16384x gtceu:raw_cobaltite', '16384x gtceu:raw_grossular', '16384x gtceu:raw_cassiterite', '16384x gtceu:raw_opal', '16384x gtceu:raw_sapphire', '16384x gtceu:raw_pyrope', '16384x gtceu:raw_spodumene', '16384x gtceu:raw_gypsum', '16384x gtceu:raw_pentlandite', '16384x gtceu:raw_olivine', '16384x gtceu:raw_nickel', '16384x gtceu:raw_bentonite', '16384x gtceu:raw_tricalcium_phosphate', '16384x gtceu:raw_granitic_mineral_sand', '16384x gtceu:raw_basaltic_mineral_sand', '16384x gtceu:raw_pyrolusite', '16384x gtceu:raw_soapstone', '16384x gtceu:raw_realgar', '16384x gtceu:raw_sodalite', '16384x gtceu:raw_talc', '16384x gtceu:raw_tin', '16384x gtceu:raw_green_sapphire']
    //35
    const nether = ['16384x gtceu:raw_barite', '16384x gtceu:raw_sulfur', '16384x gtceu:raw_chalcocite', '16384x gtceu:raw_powellite', '16384x gtceu:raw_electrotine', '16384x gtceu:raw_pyrite', '16384x gtceu:raw_redstone', '16384x gtceu:raw_certus_quartz', '16384x gtceu:raw_cinnabar', '16384x gtceu:raw_goethite', '16384x gtceu:raw_tantalite', '16384x gtceu:raw_hematite', '16384x gtceu:raw_neodymium', '16384x gtceu:raw_monazite', '16384x gtceu:raw_wulfenite', '16384x gtceu:raw_ruby', '16384x gtceu:raw_bastnasite', '16384x gtceu:raw_emerald', '16384x gtceu:raw_grossular', '16384x gtceu:raw_sphalerite', '16384x gtceu:raw_stibnite', '16384x gtceu:raw_molybdenum', '16384x gtceu:raw_alunite', '16384x gtceu:raw_blue_topaz', '16384x gtceu:raw_bornite', '16384x gtceu:raw_saltpeter', '16384x gtceu:raw_yellow_limonite', '16384x gtceu:raw_beryllium', '16384x gtceu:raw_topaz', '16384x gtceu:raw_quartzite', '16384x gtceu:raw_nether_quartz', '16384x gtceu:raw_diatomite', '16384x gtceu:raw_molybdenite', '16384x gtceu:raw_pyrolusite', '16384x gtceu:raw_tetrahedrite']
    //51
    const end = ['16384x gtceu:raw_sulfur', '16384x gtceu:raw_lithium', '16384x gtceu:raw_pyrite', '16384x gtceu:raw_hematite', '16384x gtceu:raw_neodymium', '16384x gtceu:raw_wulfenite', '16384x gtceu:raw_bastnasite', '16384x gtceu:raw_emerald', '16384x gtceu:raw_sphalerite', '16384x gtceu:raw_chromite', '16384x gtceu:raw_vanadium_magnetite', '16384x gtceu:raw_scheelite', '16384x gtceu:raw_bornite', '16384x gtceu:raw_saltpeter', '16384x gtceu:raw_bauxite', '16384x gtceu:raw_yellow_limonite', '16384x gtceu:raw_naquadah', '16384x gtceu:raw_beryllium', '16384x gtceu:raw_quartzite', '16384x gtceu:raw_magnetite', '16384x gtceu:raw_uraninite', '16384x gtceu:raw_diatomite', '16384x gtceu:raw_pitchblende', '16384x gtceu:raw_tetrahedrite', '16384x gtceu:raw_platinum', '16384x gtceu:raw_goethite', '16384x gtceu:raw_powellite', '16384x gtceu:raw_tantalite', '16384x gtceu:raw_redstone', '16384x gtceu:raw_barite', '16384x gtceu:raw_ilmenite', '16384x gtceu:raw_certus_quartz', '16384x gtceu:raw_cinnabar', '16384x gtceu:raw_electrotine', '16384x gtceu:raw_chalcocite', '16384x gtceu:raw_plutonium', '16384x gtceu:raw_ruby', '16384x gtceu:raw_monazite', '16384x gtceu:raw_grossular', '16384x gtceu:raw_cooperite', '16384x gtceu:raw_stibnite', '16384x gtceu:raw_palladium', '16384x gtceu:raw_molybdenum', '16384x gtceu:raw_blue_topaz', '16384x gtceu:raw_alunite', '16384x gtceu:raw_aluminium', '16384x gtceu:raw_topaz', '16384x gtceu:raw_nether_quartz', '16384x gtceu:raw_molybdenite', '16384x gtceu:raw_pyrolusite', '16384x gtceu:raw_tungstate']
    gtr.electrolyzer('disksavior:primitive_void_ore_1')
        .notConsumable('gtceu:primitive_void_ore')
        .notConsumable('minecraft:dirt')
        .itemOutputs(overworld)
        .EUt(1)
        .duration(68 * 256)
    gtr.electrolyzer('disksavior:primitive_void_ore_2')
        .notConsumable('gtceu:primitive_void_ore')
        .notConsumable('minecraft:netherrack')
        .itemOutputs(nether)
        .EUt(GTValues.VA[GTValues.HV])
        .duration(35 * 256)
    gtr.electrolyzer('disksavior:primitive_void_ore_3')
        .notConsumable('gtceu:primitive_void_ore')
        .notConsumable('minecraft:end_stone')
        .itemOutputs(end)
        .EUt(GTValues.VA[GTValues.IV])
        .duration(51 * 256)
})