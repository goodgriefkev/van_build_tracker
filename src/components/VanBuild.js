import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { Button } from 'reactstrap'

class VanBuild extends Component {

  state = {
    vanbuild: {}
  }

  componentDidMount() {
    this.getVanBuild()
  }

  getVanBuild = (event) => {
    fetch(this.props.baseURL + '/api/users/' + this.props.user_id + '/vanbuild', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      },
      credentials: 'include'
    })
    .then(response => response.json())
    .then(json => this.setState({vanbuild: json[0]}
    ))
  }

  deleteVanBuild = (event) => {
    fetch(this.props.baseURL + '/api/vanbuilds/' + this.state.vanbuild.id, {
      method: 'DELETE',
      credentials: 'include'
    })
    .then(this.redirect())
}

redirect = () => {
  this.props.history.push('/')
}

  render() {
    const vanbuild = this.state.vanbuild
    return (
      <>
        <div>
          <button type="button">
            Options
          </button>
          <br/>
          <Link
            to='/'
            refresh='true'
            onClick={ this.props.handleLogOut }>
            <button type="button">
              Sign Out
            </button>
          </Link>
          <br/>
          <br/>
          <Link
            to='/'
            refresh='true'
            onClick={ this.deleteVanBuild }>
              <button type="button">
                Delete Van Build
              </button>
          </Link>
        </div>
        <br/>
        <div>
          { this.state.vanbuild ?
            <>
              <h2>Your Build:</h2>
              <table key={vanbuild.id}>
                <tbody>
                  <tr><td>Name: { vanbuild.name }</td></tr>
                  <tr><td>Make: { vanbuild.make }</td></tr>
                  <tr><td>Model: { vanbuild.model }</td></tr>
                  <tr><td>Year: { vanbuild.year }</td></tr>
                  <tr><td>Color: { vanbuild.color }</td></tr>
                  <tr><td>
                    { vanbuild.flooring_material ?
                      <>
                        <p>Flooring: { vanbuild.flooring_material }</p>
                        <p>Flooring Installed:
                        { vanbuild.flooring_installed ?
                        ' Yes' :
                        ' No' }
                        </p>
                      </>
                      : null }
                    </td></tr>
                  <tr><td>
                    { vanbuild.insulation_material ?
                      <>
                        <p>Insulation: { vanbuild.insulation_material }</p>
                        <p>Insulation Installed:
                        { vanbuild.insulation_installed ?
                        ' Yes' :
                        ' No' }
                        </p>
                      </>
                      : null }
                    </td></tr>
                  <tr><td>
                    { vanbuild.wall_material ?
                      <>
                        <p>Wall Panels: { vanbuild.wall_material }</p>
                        <p>Wall Panels Installed:
                        { vanbuild.wall_installed ?
                        ' Yes' :
                        ' No' }
                        </p>
                      </>
                      : null }
                    </td></tr>
                  <tr><td>
                    { vanbuild.battery_house ?
                      <>
                        House Battery:
                        <p>Battery Brand: { vanbuild.battery_brand }</p>
                        <p>Battery Size: { vanbuild.battery_size }W</p>
                        <p>Battery Installed: {
                          vanbuild.battery_installed ?
                          ' Yes' :
                          ' No' }
                        </p>
                      </> :
                      null }
                    </td></tr>
                    <tr><td>
                      { vanbuild.inverter ?
                        <>
                          Inverter:
                          <p>Inverter Brand: { vanbuild.inverter_brand }</p>
                          <p>Inverter Size: { vanbuild.inverter_size }W</p>
                          <p>Inverter Installed: {
                            vanbuild.inverter_installed ?
                            ' Yes' :
                            ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.solar_power ?
                        <>
                          Solar Power:
                          <p>Solar Panel Brand: { vanbuild.solar_panel_brand }</p>
                          <p>Solar Panel Watts: { vanbuild.solar_panel_watts }W</p>
                          <p>Solar Controller Brand: { vanbuild.solar_controller_brand }</p>
                          <p>Solar Controller Type: { vanbuild.solar_controller_type }</p>
                          <p>Solar Installed:
                            { vanbuild.solar_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.alternator_power ?
                        <>
                          Alternator Power:
                          <p>Alternator Power Brand: { vanbuild.alternator_power_brand }</p>
                          <p>Alternator Power Type: { vanbuild.alternator_power_type }</p>
                          <p>Alternator Power Installed:
                            { vanbuild.alternator_power_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.shore_power ?
                        <>
                          Shore Power:
                          <p>Shore Power Installed:
                            { vanbuild.shore_power_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.plumbing ?
                        <>
                          Plumbing:
                          <p>Water Pump Type: { vanbuild.water_pump_type }</p>
                          <p>Water Pump Brand: { vanbuild.water_pump_brand }</p>
                          <p>Water Pump Description: { vanbuild.water_pump_description }</p>
                          <p>Water Pump Installed:
                            { vanbuild.water_pump_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                          <div>
                            { vanbuild.water_heater ?
                              <>
                                Water Heater:
                                <p>Water Heater Brand: { vanbuild.water_heater_brand }</p>
                                <p>Water Heater Type: { vanbuild.water_heater_type }</p>
                                <p>Water Heater Installed: { vanbuild.water_heater_installed ?
                                  ' Yes' :
                                  ' No' }
                                </p>
                              </> :
                              null }
                          </div>
                          <div>
                            { vanbuild.fresh_water_tank ?
                              <>
                                Fresh Water:
                                <p>Fresh Water Tank Capacity: { vanbuild.fresh_water_tank_capacity } gallons</p>
                                <p>Fresh Water Tank Installed:
                                  { vanbuild.fresh_water_tank_installed ?
                                    ' Yes' :
                                    ' No' }
                                </p>
                              </> :
                              null }
                          </div>
                          <div>
                            { vanbuild.grey_water_tank ?
                              <>
                                Grey Water:
                                <p>Grey Water Tank Capacity: { vanbuild.grey_water_tank_capacity } gallons</p>
                                <p>Grey Water Tank Installed:
                                  { vanbuild.grey_water_tank_installed ?
                                    ' Yes' :
                                    ' No' }
                                </p>
                              </> :
                              null }
                          </div>
                          <div>
                            { vanbuild.black_water_tank ?
                              <>
                                Black Water:
                                <p>Black Water Tank Capacity: { vanbuild.black_water_tank_capacity } gallons</p>
                                <p>Black Water Tank Installed:
                                { vanbuild.black_water_tank_installed ?
                                  ' Yes' :
                                  ' No' }
                                </p>
                              </> :
                              null }
                          </div>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.toilet ?
                        <>
                          Toilet:
                          <p>Toilet Type: { vanbuild.toilet_type }</p>
                          <p>Toilet Brand: { vanbuild.toilet_brand }</p>
                          <p>Toilet Installed:
                            { vanbuild.toilet_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.heater ?
                        <>
                          Heater:
                          <p>Heater Type: { vanbuild.heater_type }</p>
                          <p>Heater Brand: { vanbuild.heater_brand }</p>
                          <p>Heater Model: { vanbuild.heater_model }</p>
                          <p>Heater Installed:
                            { vanbuild.heater_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.ac ?
                        <>
                          Air Conditioning:
                          <p>A/C Brand: { vanbuild.ac_brand }</p>
                          <p>A/C Model: { vanbuild.ac_model }</p>
                          <p>A/C Installed:
                            { vanbuild.ac_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.fan ?
                        <>
                          Vent Fan:
                          <p>Fan Brand: { vanbuild.fan_brand }</p>
                          <p>Fan Model: { vanbuild.fan_model }</p>
                          <p>Fan Installed:
                            { vanbuild.fan_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.fridge ?
                        <>
                          Refridgerator:
                          <p>Fridge Brand: { vanbuild.fridge_brand }</p>
                          <p>Fridge Model: { vanbuild.fridge_model }</p>
                          <p>Fridge Installed:
                            { vanbuild.fridge_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>
                      { vanbuild.lights ?
                        <>
                          Lights:
                          <p>Number of lights: { vanbuild.lights_number }</p>
                          <p>Lights installed:
                            { vanbuild.lights_installed ?
                              ' Yes' :
                              ' No' }
                          </p>
                        </> :
                        null }
                      </td></tr>
                    <tr><td>Notes: { vanbuild.notes }</td></tr>
                </tbody>
              </table>
            </>
            :
            <Redirect to='/newvanbuild' />
            }
        </div>
      </>
    )
  }
}

export default VanBuild
