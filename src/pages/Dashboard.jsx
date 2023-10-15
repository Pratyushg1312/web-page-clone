import React from 'react'
import "./dashboard.css";
import { UilUsdCircle } from '@iconscout/react-unicons'
import { UilFileMinus } from '@iconscout/react-unicons'
import { UilWallet } from '@iconscout/react-unicons'
import { UilShoppingBag } from '@iconscout/react-unicons'
export const Dashboard = () => {
  return (
    <div className='dashboard'>
      <div className="head-sec">
        <div className="name-pro">Hi, Pratyush  &#128526;</div>
        <div className="srchbar">
          <input type="text" placeholder=" &#x1F50D;  Search.." />
        </div>
      </div>
      <div className="card-sec">
        <div className="crdfrm">
          <div className="ico-log">< UilUsdCircle size="70px" color="green" /></div>
          <div className="info">
            <p>balance</p>
            <h3>$2.4K</h3>
            <div className="sub">
              <p>2% this month</p>
            </div>
          </div>
        </div>
        <div className="crdfrm">
          <div className="ico-log"> <UilFileMinus size="70px" color="green" /></div>
          <div className="info">
            <p>balance</p>
            <h3>$2.4K</h3>
            <div className="sub">
              <p>2% this month</p>
            </div>
          </div>
        </div>
        <div className="crdfrm">
          <div className="ico-log"><UilWallet size="70px" color="green" /></div>
          <div className="info">
            <p>balance</p>
            <h3>$2.4K</h3>
            <div className="sub">
              <p>2% this month</p>
            </div>
          </div>
        </div>
        <div className="crdfrm">
          <div className="ico-log"><UilShoppingBag size="70px" color="green" /></div>
          <div className="info">
            <p>balance</p>
            <h3>$2.4K</h3>
            <div className="sub">
              <p>2% this month</p>
            </div>
          </div>
        </div>
      </div>
      <div className="chart-sec">
        <div className="overview">
          <div className="upper-sec">
            <div className="heading">
              <h3>Overview</h3>
              <p>monthly earning</p>
            </div>
            <div className="dropdown">


              <select name="dropdown" id="option">
                <option value="quaterly">Quaterly</option>
                <option value="half-yearly">Half-yearly</option>
                <option value="yearly">Yearly</option>

              </select>
            </div>
          </div>
          <div className="barchart">
            <div className="con">
              <div className="bar" style={{
                height: "180px"
              }} ></div>
              <p>jan</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "120px"
              }}></div>
              <p>feb</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "150px"
              }}></div>
              <p>mar</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "130px"
              }}></div>
              <p>apr</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "170px"
              }}></div>
              <p>may</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "100px"
              }}></div>
              <p>jun</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "80px"
              }}></div>
              <p>july</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "180px"
              }}></div>
              <p>aug</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                background: "purple"
              }}></div>
              <p>sep</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "180px"
              }}></div>
              <p>oct</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "160px"
              }}></div>
              <p>nov</p>
            </div>
            <div className="con">
              <div className="bar" style={{
                height: "190px"
              }}></div>
              <p>dec</p>
            </div>

          </div>
        </div>
        <div className="customer">
          <div className="upper-sec">
            <div className="heading">
              <h3>Customer</h3>
              <p>customer that buy products</p>
            </div>
          </div>
          <div className="chart">
            <div className="base">
              <div className="base2">
                <div className="base3"></div>
                <div className="base4">
                  <div className="heading">
                    <h3>35%</h3>
                    <p>Total New Customer</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="table">
        <div className="upper-sec">
          <div className="heading"><h3>Product Sell</h3></div>
          <div className="pack"> <div className="srchbar">
            <input type="text" placeholder=" &#x1F50D;  Search.." />
          </div>
            <div className="dropdown">


              <select name="dropdown" id="option">
                <option value="quaterly">Quaterly</option>
                <option value="half-yearly">Half-yearly</option>
                <option value="yearly">Yearly</option>

              </select>
            </div>
          </div>
        </div>
        <div className="upper-sec">
          <div className="heading">
          <p>Product Name</p>
          </div>
          <div className="pack0">
            <p>Stock</p>
            <p>Price</p>
            <p>Total Sales</p>
          </div>
        </div>
        <div className="upper-sec">
          <div className="heading">
          <div className="proimg">
            <div className="img"></div>
            <div className="info sz">
              <h4>Abstract 3D</h4>
              <p>lorem ipsum is  regular</p>
            </div>
          </div>
          </div>
          <div className="pack0 dk">
            <p>32</p>
            <p>$ 49.55</p>
            <p>2000000</p>
          </div>
        </div>
        <div className="upper-sec">
          <div className="heading">
          <div className="proimg">
            <div className="img"></div>
            <div className="info sz">
              <h4>Abstract 3D</h4>
              <p>lorem ipsum is  regular</p>
            </div>
          </div>
          </div>
          <div className="pack0 dk">
            <p>32</p>
            <p>$ 49.55</p>
            <p>2000000</p>
          </div>
        </div>
        <div className="upper-sec">
          <div className="heading al">
          <div className="proimg">
            <div className="img"></div>
            <div className="info sz">
              <h4>Abstract 3D</h4>
              <p>lorem ipsum is  regular</p>
            </div>
          </div>
          </div>
          <div className="pack0 dk">
            <p>32</p>
            <p>$ 49.55</p>
            <p>2000000</p>
          </div>
        </div>
        
      </div>
    </div>
  )
}
