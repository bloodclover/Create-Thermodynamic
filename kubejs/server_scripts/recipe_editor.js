ServerEvents.recipes(event => {
	event.remove({ output: 'create_dragons_plus:fragile_fluid_tank' })
	event.remove({ output: 'create_dragons_plus:levitite_fragile_fluid_tank' })
	event.remove({ output: 'moregenerators:buff_potato_battery' })
	event.remove({ output: 'moregenerators:resistor' })
	event.replaceInput({ input: Fluid.of('electroenergetics:plant_oil') }, Fluid.of('electroenergetics:plant_oil'), Fluid.of('createdieselgenerators:plant_oil')) 
	event.remove({ id: 'electroenergetics:compacting/plant_oil'})
	event.remove({ output: 'electroenergetics:plant_oil'})
	event.remove({ output: 'electroenergetics:plant_oil_bucket' })
	event.remove({ output: 'createdieselgenerators:mold' })

	event.remove({ id: 'create:milling/calcite' })
	event.recipes.create.milling(CreateItem.of('minecraft:bone_meal', 0.2), 'minecraft:calcite')
	
	event.remove({ output: 'moregenerators:led_filament' })
	event.shapeless('moregenerators:led_filament', ['moregenerators:silicon', 'moregenerators:phosphorus','powergrid:golden_wire'])

	// Remove CEE wires
	event.replaceInput({ input: 'electroenergetics:copper_wire' }, 'electroenergetics:copper_wire', Ingredient.of('powergrid:wire'))
	event.replaceInput({ input: 'electroenergetics:iron_wire' }, 'electroenergetics:iron_wire', Ingredient.of('powergrid:iron_wire'))
	event.replaceInput({ input: 'electroenergetics:insulated_wire' }, 'electroenergetics:insulated_wire', Ingredient.of('powergrid:insulated_copper_wire'))
	event.remove({ output: 'electroenergetics:insulated_wire' })
	event.remove({ output: 'electroenergetics:copper_wire' })
        event.remove({ output: 'electroenergetics:iron_wire' })
})
