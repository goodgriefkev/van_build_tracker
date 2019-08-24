import React, { Component } from 'react'

class NewVanBuild extends Component {

  state = {
    name: '',
    make: '',
    model: '',
    year: undefined,
    color: '',
    flooring_material: '',
    flooring_installed: false,
    insulation_material: '',
    insulation_installed: false,
    wall_material: '',
    wall_installed: false,
    battery_house: false,
    battery_brand: '',
    battery_size: undefined,
    battery_installed: false,
    inverter: false,
    inverter_brand: '',
    inverter_size: undefined,
    inverter_installed: false,
    solar_power: false,
    solar_panel_brand: '',
    solar_panel_watts: undefined,
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
    fresh_water_tank_capacity: undefined,
    fresh_water_tank_installed: false,
    grey_water_tank: false,
    grey_water_tank_capacity: undefined,
    grey_water_tank_installed: false,
    black_water_tank: false,
    black_water_tank_capacity: undefined,
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
    ac_brand: '',
    ac_model: '',
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
    lights_number: undefined,
    lights_installed: false,
    notes: ''
  }

  handleChange = (event) => {
    this.setState({[event.target.id]: event.target.value})
  }

  handleCreateVanBuild = (event) => {
    event.preventDefault()
    fetch(this.props.baseURL + '/api/vanbuilds', {
      method: 'POST',
      body:
        JSON.stringify({
          name: this.state.name,
          make: this.state.make,
          model: this.state.model,
          year: this.state.year,
          color: this.state.color,
          flooring_material: this.state.flooring_material,
          flooring_installed: this.state.flooring_installed,
          insulation_material: this.state.insulation_material,
          insulation_installed: this.state.insulation_installed,
          wall_material: this.state.wall_material,
          wall_installed: this.state.wall_installed,
          battery_house: this.state.battery_house,
          battery_brand: this.state.battery_brand,
          battery_size: this.state.battery_size,
          battery_installed: this.state.battery_installed,
          inverter: this.state.inverter,
          inverter_brand: this.state.inverter_brand,
          inverter_size: this.state.inverter_size,
          inverter_installed: this.state.inverter_installed,
          solar_power: this.state.solar_power,
          solar_panel_brand: this.state.solar_panel_brand,
          solar_panel_watts: this.state.solar_panel_watts,
          solar_installed: this.state.solar_installed,
          solar_controller_brand: this.state.solar_controller_brand,
          solar_controller_type: this.state.solar_controller_type,
          alternator_power: this.state.alternator_power,
          alternator_power_brand: this.state.alternator_power_brand,
          alternator_power_type: this.state.alternator_power_type,
          alternator_power_installed: this.state.alternator_power_installed,
          shore_power: this.state.shore_power,
          shore_power_installed: this.state.shore_power_installed,
          plumbing: this.state.plumbing,
          water_pump_type: this.state.water_pump_type,
          water_pump_brand: this.state.water_pump_brand,
          water_pump_description: this.state.water_pump_description,
          water_pump_installed: this.state.water_pump_installed,
          water_heater: this.state.water_heater,
          water_heater_brand: this.state.water_heater_brand,
          water_heater_type: this.state.water_heater_type,
          water_heater_installed: this.state.water_heater_installed,
          fresh_water_tank: this.state.fresh_water_tank,
          fresh_water_tank_capacity: this.state.fresh_water_tank_capacity,
          fresh_water_tank_installed: this.state.fresh_water_tank_installed,
          grey_water_tank: this.state.grey_water_tank,
          grey_water_tank_capacity: this.state.grey_water_tank_capacity,
          grey_water_tank_installed: this.state.grey_water_tank_installed,
          black_water_tank: this.state.black_water_tank,
          black_water_tank_capacity: this.state.black_water_tank_capacity,
          black_water_tank_installed: this.state.black_water_tank_installed,
          toilet: this.state.toilet,
          toilet_type: this.state.toilet_type,
          toilet_brand: this.state.toilet_brand,
          toilet_installed: this.state.toilet_installed,
          heater: this.state.heater,
          heater_type: this.state.heater_type,
          heater_brand: this.state.heater_brand,
          heater_model: this.state.heater_model,
          heater_installed: this.state.heater_installed,
          ac: this.state.ac,
          ac_brand: this.state.ac_brand,
          ac_model: this.state.ac_model,
          ac_installed: this.state.ac_installed,
          fan: this.state.fan,
          fan_brand: this.state.fan_brand,
          fan_model: this.state.fan_model,
          fan_installed: this.state.fan_installed,
          fridge: this.state.fridge,
          fridge_brand: this.state.fridge_brand,
          fridge_model: this.state.fridge_model,
          fridge_installed: this.state.fridge_installed,
          lights: this.state.lights,
          lights_number: this.state.lights_number,
          lights_installed: this.state.lights_installed,
          notes: this.state.notes,
          user_id: this.props.user_id
        }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include'
    })
      .then(this.buildCreated())
  }

  buildCreated = () => {
    this.props.history.push('/')
  }

  render() {
    return (
      <>
        <h2>Start a New Van Build</h2>
        <form onSubmit={this.handleCreateVanBuild}>
          <label>Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            onChange={this.handleChange}
            value={this.state.name}
            placeholder='Van Name'
          />
          <br/>
          <label>Make: </label>
          <input
            type='text'
            id='make'
            name='make'
            onChange={this.handleChange}
            value={this.state.make}
            placeholder='Vehicle Make'
          />
          <br/>
          <label>Model: </label>
          <input
            type='text'
            id='model'
            name='model'
            onChange={this.handleChange}
            value={this.state.model}
            placeholder='Vehicle Model'
          />
          <br/>
          <label>Year: </label>
          <input
            type='number'
            min='1900'
            max='2030'
            id='year'
            name='year'
            onChange={this.handleChange}
            value={this.state.year}
            placeholder='2019'
          />
          <br/>
          <label>Color: </label>
          <input
            type='text'
            id='color'
            name='color'
            onChange={this.handleChange}
            value={this.state.color}
            placeholder='Vehicle Color'
          />
          <br/>
          <label>Flooring: </label>
          <input
            type='text'
            id='flooring_material'
            name='flooring_material'
            onChange={this.handleChange}
            value={this.state.flooring_material}
            placeholder='Flooring Material'
          />
          <br/>
          <label>Flooring Installed: </label>
          <select
            id='flooring_installed'
            name='flooring_installed'
            onChange={this.handleChange}
            value={this.state.flooring_installed}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          <br/>
          <label>Insulation: </label>
          <input
            type='text'
            id='insulation_material'
            name='insulation_material'
            onChange={this.handleChange}
            value={this.state.insulation_material}
            placeholder='Insulation Material'
          />
          <br/>
          <label>Insulation Installed: </label>
          <select
            id='insulation_installed'
            name='insulation_installed'
            onChange={this.handleChange}
            value={this.state.insulation_installed}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          <br/>
          <label>Walls: </label>
          <input
            type='text'
            id='wall_material'
            name='wall_material'
            onChange={this.handleChange}
            value={this.state.wall_material}
            placeholder='Wall Material'
          />
          <br/>
          <label>Walls Installed: </label>
          <select
            id='wall_installed'
            name='wall_installed'
            onChange={this.handleChange}
            value={this.state.wall_installed}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          <br/>
          <label>"House" Battery: </label>
          <select
            id='battery_house'
            name='battery_house'
            onChange={this.handleChange}
            value={this.state.battery_house}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          {
            this.state.battery_house ?
            <div>
              <label>Battery Brand: </label>
              <input
                type='text'
                id='battery_brand'
                name='battery_brand'
                onChange={this.handleChange}
                value={this.state.battery_brand}
                placeholder='Battery Brand'
              />
              <br/>
              <label>Battery Size: </label>
              <input
                type='number'
                min='25'
                max='1000'
                id='battery_size'
                name='battery_size'
                onChange={this.handleChange}
                value={this.state.battery_size}
                placeholder='Watts'
              />
              <br/>
              <label>Battery Installed: </label>
              <select
                id='battery_installed'
                name='battery_installed'
                onChange={this.handleChange}
                value={this.state.battery_installed}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>
            : null }
          <br/>
          <label>Power Inverter: </label>
          <select
            id='inverter'
            name='inverter'
            onChange={this.handleChange}
            value={this.state.inverter}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          {
            this.state.inverter ?
            <div>
              <label>Inverter Brand: </label>
              <input
                type='text'
                id='inverter_brand'
                name='inverter_brand'
                onChange={this.handleChange}
                value={this.state.inverter_brand}
                placeholder='Inverter Brand'
              />
              <br/>
              <label>Inverter Size: </label>
              <input
                type='number'
                min='100'
                max='3000'
                id='inverter_size'
                name='inverter_size'
                onChange={this.handleChange}
                value={this.state.inverter_size}
                placeholder='Watts'
              />
              <br/>
              <label>Inverter Installed: </label>
              <select
                id='inverter_installed'
                name='inverter_installed'
                onChange={this.handleChange}
                value={this.state.inverter_installed}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>
            : null }
          <br/>
          <label>Solar: </label>
          <select
            id='solar_power'
            name='solar_power'
            onChange={this.handleChange}
            value={this.state.solar_power}
          >
            <option value='false'>No</option>
            <option value='true'>Yes</option>
          </select>
          {
            this.state.solar_power ?
            <div>
              <label>Solar Panel Brand: </label>
              <input
                type='text'
                id='solar_panel_brand'
                name='solar_panel_brand'
                onChange={this.handleChange}
                value={this.state.solar_panel_brand}
                placeholder='Solar Panel Brand'
              />
              <br/>
              <label>Solar Panel Size: </label>
              <input
                type='number'
                min='100'
                max='1000'
                id='solar_panel_watts'
                name='solar_panel_watts'
                onChange={this.handleChange}
                value={this.state.solar_panel_watts}
                placeholder='Watts'
              />
              <br/>
              <label>Solar Controller Brand: </label>
              <input
                type='text'
                id='solar_controller_brand'
                name='solar_controller_brand'
                onChange={this.handleChange}
                value={this.state.solar_controller_brand}
                placeholder='Who Makes It?'
              />
              <br/>
              <label>Solar Controller Type: </label>
              <input
                type='text'
                id='solar_controller_type'
                name='solar_controller_type'
                onChange={this.handleChange}
                value={this.state.solar_controller_type}
                placeholder='PWM or MPPT?'
              />
              <br/>
              <label>Solar Installed: </label>
              <select
                id='solar_installed'
                name='solar_installed'
                onChange={this.handleChange}
                value={this.state.solar_installed}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
            </div>
            : null }
            <br/>
            <label>Alternator Power: </label>
            <select
              id='alternator_power'
              name='alternator_power'
              onChange={this.handleChange}
              value={this.state.alternator_power}
            >
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
            {
              this.state.alternator_power ?
              <div>
                <label>Alternator Power Brand: </label>
                <input
                  type='text'
                  id='alternator_power_brand'
                  name='alternator_power_brand'
                  onChange={this.handleChange}
                  value={this.state.alternator_power_brand}
                  placeholder='Who Makes It?'
                />
                <br/>
                <label>Alternator Power Type: </label>
                <input
                  type='text'
                  id='alternator_power_type'
                  name='alternator_power_type'
                  onChange={this.handleChange}
                  value={this.state.alternator_power_type}
                  placeholder='ACR?'
                />
                <br/>
                <label>Alternator Power Installed: </label>
                <select
                  id='alternator_power_installed'
                  name='alternator_power_installed'
                  onChange={this.handleChange}
                  value={this.state.alternator_power_installed}
                >
                  <option value='false'>No</option>
                  <option value='true'>Yes</option>
                </select>
              </div>
              : null }
              <br/>
              <label>Shore Power: </label>
              <select
                id='shore_power'
                name='shore_power'
                onChange={this.handleChange}
                value={this.state.shore_power}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.shore_power ?
                <div>
                  <label>Shore Power Installed: </label>
                  <select
                    id='shore_power_installed'
                    name='shore_power_installed'
                    onChange={this.handleChange}
                    value={this.state.shore_power_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
                : null }
              <br/>
              <label>Plumbing: </label>
              <select
                id='plumbing'
                name='plumbing'
                onChange={this.handleChange}
                value={this.state.plumbing}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.plumbing ?
                <div>
                  <label>Water Pump Type: </label>
                  <input
                    type='text'
                    id='water_pump_type'
                    name='water_pump_type'
                    onChange={this.handleChange}
                    value={this.state.water_pump_type}
                    placeholder='Manual? Electric?'
                  />
                  <br/>
                  <label>Water Pump Brand: </label>
                  <input
                    type='text'
                    id='water_pump_brand'
                    name='water_pump_brand'
                    onChange={this.handleChange}
                    value={this.state.water_pump_brand}
                    placeholder='Who Makes It?'
                  />
                  <br/>
                  <label>Water Pump Description: </label>
                  <input
                    type='text'
                    id='water_pump_description'
                    name='water_pump_description'
                    onChange={this.handleChange}
                    value={this.state.water_pump_description}
                    placeholder='Details?'
                  />
                  <br/>
                  <label>Water Pump Installed: </label>
                  <select
                    id='water_pump_installed'
                    name='water_pump_installed'
                    onChange={this.handleChange}
                    value={this.state.water_pump_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                  <br/>

                  <label>Water Heater: </label>
                  <select
                    id='water_heater'
                    name='water_heater'
                    onChange={this.handleChange}
                    value={this.state.water_heater}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                  {
                    this.state.water_heater ?
                    <div>
                      <label>Water Heater Brand: </label>
                      <input
                        type='text'
                        id='water_heater_brand'
                        name='water_heater_brand'
                        onChange={this.handleChange}
                        value={this.state.water_heater_brand}
                        placeholder='Who Makes It?'
                      />
                      <br/>
                      <label>Water Heater Type: </label>
                      <input
                        type='text'
                        id='water_heater_type'
                        name='water_heater_type'
                        onChange={this.handleChange}
                        value={this.state.water_heater_type}
                        placeholder='On Demand?'
                      />
                      <br/>
                      <label>Water Heater Installed: </label>
                      <select
                        id='water_heater_installed'
                        name='water_heater_installed'
                        onChange={this.handleChange}
                        value={this.state.water_heater_installed}
                      >
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                      </select>
                    </div>
                  : null }
                  <br/>
                  <label>Fresh Water: </label>
                  <select
                    id='fresh_water_tank'
                    name='fresh_water_tank'
                    onChange={this.handleChange}
                    value={this.state.fresh_water_tank}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                  {
                    this.state.fresh_water_tank ?
                    <div>
                      <label>Fresh Water Tank Capacity: </label>
                      <input
                        type='number'
                        min='1'
                        max='100'
                        id='fresh_water_tank_capacity'
                        name='fresh_water_tank_capacity'
                        onChange={this.handleChange}
                        value={this.state.fresh_water_tank_capacity}
                        placeholder='Gal.'
                      />
                      <br/>
                      <label>Fresh Water Tank Installed: </label>
                      <select
                        id='fresh_water_tank_installed'
                        name='fresh_water_tank_installed'
                        onChange={this.handleChange}
                        value={this.state.fresh_water_tank_installed}
                      >
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                      </select>
                    </div>
                  : null }
                  <br/>
                  <label>Grey Water: </label>
                  <select
                    id='grey_water_tank'
                    name='grey_water_tank'
                    onChange={this.handleChange}
                    value={this.state.grey_water_tank}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                  {
                    this.state.grey_water_tank ?
                    <div>
                      <label>Grey Water Tank Capacity: </label>
                      <input
                        type='number'
                        min='1'
                        max='100'
                        id='grey_water_tank_capacity'
                        name='grey_water_tank_capacity'
                        onChange={this.handleChange}
                        value={this.state.grey_water_tank_capacity}
                        placeholder='Gal.'
                      />
                      <br/>
                      <label>Grey Water Tank Installed: </label>
                      <select
                        id='grey_water_tank_installed'
                        name='grey_water_tank_installed'
                        onChange={this.handleChange}
                        value={this.state.grey_water_tank_installed}
                      >
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                      </select>
                    </div>
                  : null }
                  <br/>
                  <label>Black Water: </label>
                  <select
                    id='black_water_tank'
                    name='black_water_tank'
                    onChange={this.handleChange}
                    value={this.state.black_water_tank}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                  {
                    this.state.black_water_tank ?
                    <div>
                      <label>Black Water Tank Capacity: </label>
                      <input
                        type='number'
                        min='1'
                        max='100'
                        id='black_water_tank_capacity'
                        name='black_water_tank_capacity'
                        onChange={this.handleChange}
                        value={this.state.black_water_tank_capacity}
                        placeholder='Gal.'
                      />
                      <br/>
                      <label>Black Water Tank Installed: </label>
                      <select
                        id='black_water_tank_installed'
                        name='black_water_tank_installed'
                        onChange={this.handleChange}
                        value={this.state.black_water_tank_installed}
                      >
                        <option value='false'>No</option>
                        <option value='true'>Yes</option>
                      </select>
                    </div>
                  : null }
            </div>
            : null }
            <br/>
            <label>Toilet: </label>
            <select
              id='toilet'
              name='toilet'
              onChange={this.handleChange}
              value={this.state.toilet}
            >
              <option value='false'>No</option>
              <option value='true'>Yes</option>
            </select>
            {
              this.state.toilet ?
              <div>
                <label>Toilet Type: </label>
                <input
                  type='text'
                  id='toilet_type'
                  name='toilet_type'
                  onChange={this.handleChange}
                  value={this.state.toilet_type}
                  placeholder='Yep'
                />toilet_brand
                <br/>
                <label>Toilet Brand: </label>
                <input
                  type='text'
                  id='toilet_brand'
                  name='toilet_brand'
                  onChange={this.handleChange}
                  value={this.state.toilet_brand}
                  placeholder='Who Makes It?'
                />
                <br/>
                <label>Toilet Installed: </label>
                <select
                  id='toilet_installed'
                  name='toilet_installed'
                  onChange={this.handleChange}
                  value={this.state.toilet_installed}
                >
                  <option value='false'>No</option>
                  <option value='true'>Yes</option>
                </select>
              </div>
              : null }
              <br/>
              <label>Heater: </label>
              <select
                id='heater'
                name='heater'
                onChange={this.handleChange}
                value={this.state.heater}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.heater ?
                <div>
                  <label>Heater Type: </label>
                  <input
                    type='text'
                    id='heater_type'
                    name='heater_type'
                    onChange={this.handleChange}
                    value={this.state.heater_type}
                    placeholder='Diesel? Electric?'
                  />
                  <br/>
                  <label>Heater Brand: </label>
                  <input
                    type='text'
                    id='heater_brand'
                    name='heater_brand'
                    onChange={this.handleChange}
                    value={this.state.heater_brand}
                    placeholder='Who Makes It?'
                  />
                  <br/>
                  <label>Heater Model: </label>
                  <input
                    type='text'
                    id='heater_model'
                    name='heater_model'
                    onChange={this.handleChange}
                    value={this.state.heater_model}
                    placeholder='Which One?'
                  />
                  <br/>
                  <label>Heater Installed: </label>
                  <select
                    id='heater_installed'
                    name='heater_installed'
                    onChange={this.handleChange}
                    value={this.state.heater_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
              : null }
              <br/>
              <label>Air Conditioning: </label>
              <select
                id='heater'
                name='heater'
                onChange={this.handleChange}
                value={this.state.ac}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.ac ?
                <div>
                  <label>A/C Brand: </label>
                  <input
                    type='text'
                    id='ac_brand'
                    name='ac_brand'
                    onChange={this.handleChange}
                    value={this.state.ac_brand}
                    placeholder='Who Makes It?'
                  />
                  <br/>
                  <label>A/C Model: </label>
                  <input
                    type='text'
                    id='ac_model'
                    name='ac_model'
                    onChange={this.handleChange}
                    value={this.state.ac_model}
                    placeholder='Which One?'
                  />
                  <br/>
                  <label>A/C Installed: </label>
                  <select
                    id='ac_installed'
                    name='ac_installed'
                    onChange={this.handleChange}
                    value={this.state.ac_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
              : null }
              <br/>
              <label>Vent Fan: </label>
              <select
                id='fan'
                name='fan'
                onChange={this.handleChange}
                value={this.state.fan}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.fan ?
                <div>
                  <label>Fan Brand: </label>
                  <input
                    type='text'
                    id='fan_brand'
                    name='fan_brand'
                    onChange={this.handleChange}
                    value={this.state.fan_brand}
                    placeholder='Who Makes It?'
                  />
                  <br/>
                  <label>Fan Model: </label>
                  <input
                    type='text'
                    id='fan_model'
                    name='fan_model'
                    onChange={this.handleChange}
                    value={this.state.fan_model}
                    placeholder='Which One?'
                  />
                  <br/>
                  <label>Fan Installed: </label>
                  <select
                    id='fan_installed'
                    name='fan_installed'
                    onChange={this.handleChange}
                    value={this.state.fan_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
              : null }
              <br/>
              <label>Refrigerator: </label>
              <select
                id='fridge'
                name='fridge'
                onChange={this.handleChange}
                value={this.state.fridge}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.fridge ?
                <div>
                  <label>Fridge Brand: </label>
                  <input
                    type='text'
                    id='fridge_brand'
                    name='fridge_brand'
                    onChange={this.handleChange}
                    value={this.state.fridge_brand}
                    placeholder='Who Makes It?'
                  />
                  <br/>
                  <label>Fridge Model: </label>
                  <input
                    type='text'
                    id='fridge_model'
                    name='fridge_model'
                    onChange={this.handleChange}
                    value={this.state.fridge_model}
                    placeholder='Which One?'
                  />
                  <br/>
                  <label>Fridge Installed: </label>
                  <select
                    id='fridge_installed'
                    name='fridge_installed'
                    onChange={this.handleChange}
                    value={this.state.fridge_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
              : null }
              <br/>
              <label>Lights: </label>
              <select
                id='lights'
                name='lights'
                onChange={this.handleChange}
                value={this.state.lights}
              >
                <option value='false'>No</option>
                <option value='true'>Yes</option>
              </select>
              {
                this.state.lights ?
                <div>
                  <label>Number of Lights: </label>
                  <input
                    type='number'
                    min='0'
                    max='20'
                    id='lights_number'
                    name='lights_number'
                    onChange={this.handleChange}
                    value={this.state.lights_number}
                    placeholder='How Many?'
                  />
                  <br/>
                  <label>Lights Installed: </label>
                  <select
                    id='lights_installed'
                    name='lights_installed'
                    onChange={this.handleChange}
                    value={this.state.lights_installed}
                  >
                    <option value='false'>No</option>
                    <option value='true'>Yes</option>
                  </select>
                </div>
              : null }
              <br/>
              <label>Notes: </label>
              <input
                type='text'
                id='notes'
                name='notes'
                onChange={this.handleChange}
                value={this.state.notes}
                placeholder='etc.'
              />
          <br/>
          <br/>
          <input
            type='submit'
            value='Create Build'
          />
        </form>
      </>
    )
  }
}

export default NewVanBuild
