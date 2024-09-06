import React, { useState, useEffect } from "react";
import Card from "./Card";
import axios from "axios";
import "./Deck.css";

const API_BASE_URL = "https://deckofcardsapi.com/api/deck";

function Deck() {
  const [deck, setDeck] = useState(null);
  const [drawn, setDrawn] = useState([]);
  const [isShuffling, setIsShuffling] = useState(false);

  useEffect(function loadDeckFromAPI() {
    async function fetchData() {
      const d = await axios.get(`${API_BASE_URL}/new/shuffle/`);
      setDeck(d.data);
    }
    fetchData();
  }, []);
}
