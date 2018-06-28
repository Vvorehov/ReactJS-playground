import React from "react"
import './styles.scss'

export default function Logo(props) {
  return (
    <div className="siteLogo">{props.siteName}</div>
  )
}
