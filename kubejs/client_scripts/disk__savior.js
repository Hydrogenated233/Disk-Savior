priority: 999
// 生成仅包含单一类型(Item或Fluid)的元件包
const packed_infinity_cell = (cellname, type, list) => {
    // 使用 Array.map 生成 key 字符串，避免手动循环拼接出错
    let keysNBT = list.map(id => {
        return `{
            "#c": "ae2:i",
            id: "expatternprovider:infinity_cell",
            tag: {
                record: {
                    "#c": "ae2:${type}",
                    id: "${id}"
                }
            }
        }`
    }).join(",")

    // 生成 amounts 数组 [1L, 1L, ...]
    let amtsNBT = list.map(() => "1L").join(",")

    // 手动转义 Name JSON，确保引号正确
    let nameJson = JSON.stringify({ text: cellname }) // 输出 '{"text":"名字"}'

    let finalNBT = `{
        RepairCost: 0,
        amts: [L;${amtsNBT}],
        display: {Name: '${nameJson}'},
        ic: ${list.length}L,
        internalCurrentPower: 20000.0d,
        keys: [${keysNBT}]
    }`

    return Item.of('ae2:portable_item_cell_16k', finalNBT)
}
JEIEvents.subtypes(event => {
    // 注册便携元件的 NBT 判定，确保 JEI 能识别内部数据的区别
    event.useNBT('ae2:portable_item_cell_16k')
    event.useNBT('expatternprovider:infinity_cell')
    parallel_hatch_list.forEach(i => {
        event.useNBT(i)
    })
    event.useNBT('gtceu:auto_configuration_maintenance_hatch')
    event.useNBT('gtceu:configurable_maintenance_hatch')
    event.useNBT('gtladditions:macro_atomic_resonant_fragment_stripper')
})
JEIEvents.addItems(event => {
    //染料元件包
    event.add(packed_infinity_cell('染料元件包', 'f', ['gtceu:black_dye', 'gtceu:blue_dye', 'gtceu:brown_dye', 'gtceu:cyan_dye', 'gtceu:gray_dye', 'gtceu:green_dye', 'gtceu:light_blue_dye', 'gtceu:lime_dye', 'gtceu:magenta_dye', 'gtceu:orange_dye', 'gtceu:pink_dye', 'gtceu:purple_dye', 'gtceu:red_dye', 'gtceu:white_dye', 'gtceu:yellow_dye', 'gtceu:light_gray_dye']))
})