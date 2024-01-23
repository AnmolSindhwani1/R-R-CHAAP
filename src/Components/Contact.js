import React from 'react'
import { Link,Outlet } from 'react-router-dom'
export default function Contact() {
  return (
    <div>
      <table className='table'>
        <td width={200}>
            <tr>
                <ul>
                    <li><Link to="PowerHouse">PowerHouse</Link></li>
                    <li><Link to="MedicalMor">MedicalMor</Link></li>
                </ul>
            </tr>
        </td>
        <td><Outlet/></td>

      </table>
    </div>
  )
}
