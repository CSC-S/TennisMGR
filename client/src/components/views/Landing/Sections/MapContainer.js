/*eslint-disable*/
import React, { useEffect, useState } from 'react';
import styled from "styled-components";

import "./MapContainer.css"

const { kakao } = window

const MapContainer = ({ searchPlace }) => {

  // 검색결과 배열에 담아줌
  const [Places, setPlaces] = useState([])
  
  useEffect(() => {
    var infowindow = new kakao.maps.InfoWindow({ zIndex: 1 })
    // eslint-disable-next-line
    var markers = []
    const container = document.getElementById('myMap')
    const options = {
      center: new kakao.maps.LatLng(37.566826, 126.9786567),
      level: 4,
    }
    const map = new kakao.maps.Map(container, options)

    const ps = new kakao.maps.services.Places()

    ps.keywordSearch(searchPlace, placesSearchCB)

    function placesSearchCB(data, status, pagination) {
      if (status === kakao.maps.services.Status.OK) {
        let bounds = new kakao.maps.LatLngBounds()

        for (let i = 0; i < data.length; i++) {
          displayMarker(data[i])
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x))
        }

        map.setBounds(bounds)
        // 페이지 목록 보여주는 displayPagination() 추가
        displayPagination(pagination)
        setPlaces(data)
      }
    }

    // 검색결과 목록 하단에 페이지 번호 표시
    function displayPagination(pagination) {
      var paginationEl = document.getElementById('pagination'),
        fragment = document.createDocumentFragment(),
        i

      // 기존에 추가된 페이지 번호 삭제
      while (paginationEl.hasChildNodes()) {
        paginationEl.removeChild(paginationEl.lastChild)
      }

      for (i = 1; i <= pagination.last; i++) {
        var el = document.createElement('a')
        el.href = '#'
        el.innerHTML = i

        if (i === pagination.current) {
          el.className = 'on'
        } else {
          el.onclick = (function (i) {
            return function () {
              pagination.gotoPage(i)
            }
          })(i)
        }

        fragment.appendChild(el)
      }
      paginationEl.appendChild(fragment)
    }

    function displayMarker(place) {
      let marker = new kakao.maps.Marker({
        map: map,
        position: new kakao.maps.LatLng(place.y, place.x),
      })

      kakao.maps.event.addListener(marker, 'click', function () {
        infowindow.setContent('<div style="padding:5px;font-size:12px;">' + place.place_name + '</div>')
        infowindow.open(map, marker)
      })
    }
  }, [searchPlace])

  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        id="myMap"
        style={{
          width: "1300px",
          height: "800px",
          display: "inline-block",
          justifyContent: "center",
          marginBottom: "10px",
        }}
      >
        <div
          id="result-list"
          style={{
            listStyle: "inside",
            width: "30%",
            height: "730px",
            position: "absolute",
            overflowY: "auto",
            zIndex: "9",
            top: "0",
            left: "0",
            bottom: "0",
            margin: "10px 0 30px 10px",
            background: "rgba(255, 255, 255, 0.7)",
            borderRadius: "15px",
          }}
        >
          {Places.map((item, i) => (
            <div key={i}>
              <span
                style={{
                  fontFamily: "Noto Serif Korean",
                  display: "block",
                  marginTop: "7px",
                  borderTop: "3px solid #888",
                  textAlign: "left"
                }}
              >
                {i + 1}
              </span>
              <div style={{ cursor: "pointer" }}>
                <h5
                  style={{
                    fontFamily: "Noto Serif Korean",
                    overflow: "hidden",
                    minHeight: "5px",
                    color: "black",
                  }}
                >
                  {item.place_name}
                </h5>
                {item.road_address_name ? (
                  <div>
                    <span>{item.road_address_name}</span>
                    <span>{item.address_name}</span>
                  </div>
                ) : (
                  <span>{item.address_name}</span>
                )}
                <span>{item.phone}</span>
              </div>
            </div>
          ))}
          <div
            id="pagination"
            style={{ margin: "10px auto", textAlign: "center" }}
          ></div>
        </div>
      </div>
    </div>
  );
}

export default MapContainer