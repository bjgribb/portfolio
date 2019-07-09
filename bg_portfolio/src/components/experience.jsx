import React, { Component } from 'react'

export default class Experience extends Component {
  render () {
    return (
      <section className='experience-section section'>
        <div className='container'>
          <div className='row'>
            <div className='col-sm-4'>
              <div className='heading'>
                <h3><b>Work History</b></h3>
                <h6 className='font-lite-black'><b>EXPERIENCE</b></h6>
              </div>
            </div>
            <div className='col-sm-8'>
              <div className='experience margin-b-50'>
                <h4><b>Student Developer</b></h4>
                <h5 className='font-yellow'><b>MOMENTUM LEARNING</b></h5>
                <h6 className='margin-t-10'>FEBRUARY 2019 - MAY 2019</h6>
                {/* <p className='font-semi-white margin-tb-30'>Dedicated 12 weeks in specialized, immersive training centered on Python/Django language fluency, object-oriented programming, and
                  project-based learning. Programmed full-stack web applications solo, in pair programming and in group settings, leveraging Agile
                  techniques. Worked in a highly collaborative environment, reviewing others code utilizing version control in Github and project
                  management tools such as Trello and Github issues.</p> */}
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Dedicated 12 weeks in specialized, immersive training centered on Python/Django language fluency, object-oriented programming and project-based learning.</li>
                  <li>Programmed full-stack web applications solo, in pair programming and in group setting, leveraging Agile techniques.</li>
                  <li>Worked in a highly collaborative environment, reviewing others code utilizing version control in Github and project management tools such as Trello and Github issues.</li>
                </ul>
              </div>
              <div className='experience margin-b-50'>
                <h4><b>M&amp;A Strategic Analyst AVP</b></h4>
                <h5 className='font-yellow'><b>CREDIT SUISSE</b></h5>
                <h6 className='margin-t-10'>MARCH 2018 - FEBRUARY 2019</h6>
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Directly supported the COO and Group Heads ensuring accurate and timely financial reporting and market share analysis.</li>
                  <li>Worked with M&amp;A bankers to provide ad hoc financial and market analysis, in order to support client business and planning efforts.</li>
                  <li>Collaborated with group management on business reviews and strategic planning presentations.</li>
                  <li>Maintained internal client coverage and financial systems, ensure data integrity of IBCM reporting systems.</li>
                  <li>Utilized state of the art business intelligence tools to manipulate large datasets and provide actionable analysis to senior management.</li>
                  <li>Collaborated with a diverse team in Raleigh which supports all of IBCM’s banking groups.</li>
                </ul>
              </div>
              <div className='experience margin-b-50'>
                <h4><b>Credit Trade Management AVP</b></h4>
                <h5 className='font-yellow'><b>CREDIT SUISSE</b></h5>
                <h6 className='margin-t-10'>JANUARY 2017 - MARCH 2018</h6>
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Actively managed a team responsible for capturing, reconciling and reporting risk for the High Yield and Investment Grade Credit Desks as well as a sales team responsible for all credit allocations and assignments across the IG, HY and Structured Credit Desks.</li>
                  <li>Responsible for implementing/enforcing strict controls to maintain high regulation standards and ongoing training to keep direct reports up to date on new or changing compliance regulations.</li>
                  <li>Driving new process deployments to Raleigh thru comprehensive trainings with senior colleagues at the bank and being responsible for their smooth transition as to not interrupt BAU.</li>
                  <li>Partnered closely with senior management and IT teams to perform UAT testing and implementation of Credit TM system releases as well as advising on system design to improve workflow.</li>
                  <li>Responsible for managing, mentoring and career development for 5 direct reports – conducting regular one on one meetings, setting yearly objectives and conducting year end performance reviews.</li>
                  <li>Responsible for managing all metrics for Flow Credit Trade Management, ensuring compliance and controls.</li>
                </ul>
              </div>
              <div className='experience margin-b-50'>
                <h4><b>Credit Trade Management Analyst</b></h4>
                <h5 className='font-yellow'><b>CREDIT SUISSE</b></h5>
                <h6 className='margin-t-10'>SEPTEMBER 2014 - JANUARY 2017</h6>
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Middle office support for the Investment Grade and High Yield Credit Flow Derivatives Desk.</li>
                  <li>Oversaw front to back processing of credit default swaps thru all trade life cycle events.</li>
                  <li>Coordinated with front office and back office to ensure accurate and timely trade capture while resolving any trade related issues.</li>
                  <li>Responsible for daily PnL reconciliation and reporting while assisting with ad-hoc trading requests or PnL explanation.</li>
                </ul>
              </div>
              <div className='experience margin-b-50'>
                <h4><b>Member Services Representative</b></h4>
                <h5 className='font-yellow'><b>RTP FEDERAL CREDIT UNION</b></h5>
                <h6 className='margin-t-10'>NOVEMBER 2013 - AUGUST 2014</h6>
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Handled diverse range of financial services for members; work scope included phone fund transfers, stop payment processing, reviewing account activity/history as well as assessing statement and overdraft information. </li>
                  <li>Maintained database tracking for member check orders, CD renewals and related product information.</li>
                  <li>Completed documents for various services such as payroll deductions, direct deposit, wire transfer requests, online banking, bill payment services and electronic card services for maintenance, changes and adjustments.</li>
                  <li>Opened new accounts explaining options such as single/joint ownership, savings vs. shared drafts, certificates and retirement programs while accurately preparing paperwork verifying all information is correct and procedures are followed.</li>
                </ul>
              </div>
              <div className='experience margin-b-50'>
                <h4><b>Teller</b></h4>
                <h5 className='font-yellow'><b>RTP FEDERAL CREDIT UNION</b></h5>
                <h6 className='margin-t-10'>FEBRUARY 2013 - NOVEMBER 2013</h6>
                <ul className='list margin-b-30 font-semi-white margin-tb-30'>
                  <li>Cashed negotiable items and disbursed monies after verifying signatures, endorsements and member account balances.</li>
                  <li>Collected loan payments and placed holds on accounts for uncollected funds, according to credit union procedures.</li>
                  <li>Explained, promoted and sold credit union products and services.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}
