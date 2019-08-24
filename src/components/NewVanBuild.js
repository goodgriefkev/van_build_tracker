import React, { Component } from 'react'

class NewVanBuild extends Component {

  state = {
    name: '',
    make: '',
    model: '',
    year: null,
    color: '',
    flooring_material: '',
    flooring_installed: false,
    insulation_material: '',
    insulation_installed: false,
    wall_material: '',
    wall_installed: false,
    battery_house: false,
    battery_brand: '',
    battery_size: null,
    battery_installed: false,
    inverter: false,
    inverter_brand: '',
    inverter_size: null,
    inverter_installed: false,
    solar_power: false,
    solar_panel_brand: '',
    solar_panel_watts: null,
    solar_installed: false,
    solar_controller_brand: '',
    solar_controller_type: '',
    alternator_power: false,
    alternator_power_brand: '',
    alternator_power_type: '',
    alternator_power_installed: false,
    shore_power: false,
    shore_power_installed: false,
    plumbing: false,
    water_pump_type: '',
    water_pump_brand: '',
    water_pump_description: '',
    water_pump_installed: false,
    water_heater: false,
    water_heater_brand: '',
    water_heater_type: '',
    water_heater_installed: false,
    fresh_water_tank: false,
    fresh_water_tank_capacity: null,
    fresh_water_tank_installed: false,
    grey_water_tank: false,
    grey_water_tank_capacity: null,
    grey_water_tank_installed: false,
    black_water_tank: false,
    black_water_tank_capacity: null,
    black_water_tank_installed: false,
    toilet: false,
    toilet_type: '',
    toilet_brand: '',
    toilet_installed: false,
    heater: false,
    heater_type: '',
    heater_brand: '',
    heater_model: '',
    heater_installed: false,
    ac: false,
    ac_brand: null,
    ac_model: null,
    ac_installed: false,
    fan: false,
    fan_brand: '',
    fan_model: '',
    fan_installed: false,
    fridge: false,
    fridge_brand: '',
    fridge_model: '',
    fridge_installed: false,
    lights: false,
    lights_number: null,
    lights_installed: false,
    notes: ''
  }

  render() {
    return (
      <>
        <h2>Start a New Van Build</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type=''
            id=''
            name=''
            onChange={this.handleChange}
            value={this.state.}
            placeholder=''
          />
          <input
            type='submit'
            value='Create Build'
          />
        </form
      </>
    )
  }
}
