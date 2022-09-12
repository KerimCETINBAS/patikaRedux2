import { configureStore, createSlice, nanoid } from "@reduxjs/toolkit"
import reducers  from "./reducer"


const itemSlicer = createSlice({
    name: "store",
    initialState: {
        items: [
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/big-mac.jpg",
                name: "Big Mac",
                price: 2,
                amount: 0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/flip-flops.jpg",
                name: "Parmak Arasi Terlik",
                price: 3,
                amount: 0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/coca-cola-pack.jpg",
                name: "Coca-Cola Paketi",
                price: 5,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/movie-ticket.jpg",
                name: "Sinema Bileti",
                price: 12,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/book.jpg",
                name: "Kitap",
                price: 15,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/lobster-dinner.jpg",
                name: "Yengec Tabagi",
                price: 45,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/video-game.jpg",
                name: "Bilgisayar Oyunu",
                price: 60,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/amazon-echo.jpg",
                name: "Amozon Echo",
                price: 99,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/year-of-netflix.jpg",
                name: "1 Yillik Netflix",
                price: 100,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/air-jordans.jpg",
                name: "Air Jordans",
                price: 125,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/airpods.jpg",
                name: "Airpods",
                price: 199,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/gaming-console.jpg",
                name: "Oyun Konsolu",
                price: 299,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/drone.jpg",
                name: "Drone",
                price: 350,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/smartphone.jpg",
                name: "Akilli Telefon",
                price: 699,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/bike.jpg",
                name: "Bisiklet",
                price: 800,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/kitten.jpg",
                name: "Kedi :3",
                price: 1500,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/puppy.jpg",
                name: "Kopek",
                price: 1500,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/auto-rickshaw.jpg",
                name: "Otomatik Fayton",
                price: 2300,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/horse.jpg",
                name: "At",
                price: 2500,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/acre-of-farmland.jpg",
                name: "1 Donum tarla",
                price: 3000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/designer-handbag.jpg",
                name: "Modaci Cantasi",
                price: 5500,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/hot-tub.jpg",
                name: "Jakuzi",
                price: 6000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/luxury-wine.jpg",
                name: "Yillanmis Sarap",
                price: 7000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/diamond-ring.jpg",
                name: "Elmas Yuzuk",
                price: 10000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/jet-ski.jpg",
                name: "Jet Ski",
                price: 12000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/rolex.jpg",
                name: "Rolex",
                price: 15000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/ford-f-150.jpg",
                name: "Ford F-150",
                price: 30000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/tesla.jpg",
                name: "Tesla s",
                price: 75000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/monster-truck.jpg",
                name: "Monster Truck",
                price: 150000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/ferrari.jpg",
                name: "Ferrari",
                price: 250000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/single-family-home.jpg",
                name: "1 Ailelik Ev",
                price: 300000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/gold-bar.jpg",
                name: "Altin Kulce",
                price: 700000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/mcdonalds-franchise.jpg",
                name: "MacDonalds Bayiligi",
                price: 1500000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/superbowl-ad.jpg",
                name: "Superbowl Ad",
                price: 5250000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/yacht.jpg",
                name: "Yat",
                price: 7500000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/m1-abrams.jpg",
                name: "M1 Abrams",
                price: 8000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/formula-1-car.jpg",
                name: "Formula 1 Arabasi",
                price: 15000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/mansion.jpg",
                name: "Konak",
                price: 45000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/make-a-movie.jpg",
                name: "Film Cekmek",
                price: 100000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/boeing-747.jpg",
                name: "Boeing 747",
                price: 148000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/mona-lisa.jpg",
                name: "Mona Lisa",
                price: 780000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/skyscraper.jpg",
                name: "Gokdelen",
                price: 850000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/cruise-ship.jpg",
                name: "Yolcu Gemisi",
                price: 930000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://neal.fun/spend/images/nba-team.jpg",
                name: "NBA Takimi",
                price: 2120000000,
                amount:0
            },
            
            {
                id: nanoid(),
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCXhDS_T2gO_4ogwTDnk2MFjkaBq1CmA5ZRQ&usqp=CAU",
                name: "F-16 Filosu",
                price: 5300000000,
                amount:0
            },
            {
                id: nanoid(),
                img: "https://cdn1.ntv.com.tr/gorsel/9mfvswbiCEi4wCNznkbLDA.jpg?width=1000&mode=both&scale=both&v=1460100939905",
                name: "Ucak gemisi",
                price: 13000000000,
                amount:0
            }
        ],
        money: 100000000000,
        total: 0
    },
    reducers
})

export const  { buyItemAction, sellItemAction } = itemSlicer.actions 

export default  configureStore({
    reducer: {
        store: itemSlicer.reducer
    }
})