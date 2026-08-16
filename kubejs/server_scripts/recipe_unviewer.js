// Items
RecipeViewerEvents.removeEntriesCompletely('item', event => {
	event.remove('create_dragons_plus:fragile_fluid_tank')
	event.remove('create_dragons_plus:levitite_fragile_fluid_tank')
	event.remove('fluidlogistics:multi_fluid_tank')
	event.remove('fluidlogistics:horizontal_multi_fluid_tank')
	event.remove('moregenerators:buff_potato_battery')
	event.remove('moregenerators:resistor')
	event.remove('createdieselgenerators:mold')
	event.remove('electroenergetics:insulated_wire')
	event.remove('electroenergetics:copper_wire')
	event.remove('electroenergetics:iron_wire')
	event.remove('electroenergetics:plant_oil_bucket')
})

// Fluids
RecipeViewerEvents.removeEntriesCompletely('fluid', event => {
	event.remove('electroenergetics:plant_oil')
})
