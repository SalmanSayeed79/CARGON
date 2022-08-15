[![Group-56.png](https://i.postimg.cc/NMWSJ0tc/Group-56.png)](https://postimg.cc/VrWK5m5G)
# Cargon
A complete supply chain solution for pharmaceutical companies. Cargon Has 5 products 
1. MillHouse - Customer Side App
2. MedPilot - Distributor Side App
3. MedDepot - Wholesaler Side App
4. MedChant - Retailer Side App
5. Apothecary - Customer Side App
## Project Overview

## Important Links
##### Cargon Landing
[Live Demo](https://cargonbd.web.app/)
##### MillHouse
[Live Demo](https://cargonproduction.web.app/)
##### MedPilot
[Live Demo](https://cargon-medpilot.web.app/)
##### Apothecary
[Live Demo](https://cargon-apothecary.firebaseapp.com/)
##### Cargon Application (BACKEND)
[GitHub Repository](https://github.com/SalmanSayeed79/CARGON)


## Background
Counterfeit drugs are abundant almost in every country in the world. But no proper measures has been taken to authenticate drugs at a consumer level

- 200 billion counterfeit products are in the market throughout 113 countries (According to WHO survey)
- 104 children will killed by fake syrup in bangladesh (78 in 1991 and 28 in 2009)
- 250k children around the world are vulnerable to counterfeit drugs

**Existing Systems**
At consumer levels, there are 2 ways to verify the authenticity of a drug
1. Low resource drug testing
2. SMS Based consumer authentication
However none of them are efficient and enough at doing what they are supposed to. This is where we come in

## Solution
[![Group-53.png](https://i.postimg.cc/90WhcM4j/Group-53.png)](https://postimg.cc/YGyV3tfX)
Cargon is proposing a system that would let our consumers track the whole lifecycle of a product from production to retail

- Consumer buys a product
- Scans the QR code on the box
- Gets to know the exact time of purchase as the status would be updated only when the consumer buys it
- View the whole supply chain of the product
- Get Cargon verified drugs



## Methodology
**Factory**
- Wholesaler places an order
- Order gets passed onto the factory admin
- Factory admin creates batch and selects proper amount to deliver 
- Factory admin assigns a distributor to fulfill the order
- Factory admin creates or modifies products when needed

**Distributor**
- Can access all the assigned orders
- Can access all the previous completed orders

**Wholesaler**
- manages inventory
- Gets order from retailers
- Supplies orders according to current stock
- Orders from factory when necessary

**Retailer**
- manages inventory
- Orders to wholesalers
- Sells to consumers
Consumer
- buys from a retailer
- Buys bulk directly from factory
## Architecture
### Relational Schema
[![Production.png](https://i.postimg.cc/d10ZQ15q/Production.png)](https://postimg.cc/t1L42X0f)

[![Dist.png](https://i.postimg.cc/44qHZXVg/Dist.png)](https://postimg.cc/MX0pm29P)

[![Wholesaler.png](https://i.postimg.cc/fyt3XP4p/Wholesaler.png)](https://postimg.cc/p5vXMqLJ)

[![retailer.png](https://i.postimg.cc/0jTzCCPQ/retailer.png)](https://postimg.cc/wRkxqLt8)

[![Consumer.png](https://i.postimg.cc/Bv41yNDP/Consumer.png)](https://postimg.cc/qNDR6s1p)
## Technology Stack

**Front End**

- React JS as a library
- MUI for UI Library
- React-router-dom for routing
- Axios for REST API calls
- AOS package for animation

**Back End**
- Springboot as the backend library
- POSTGRESQL as main database
- Firebase for Authentication

**Hosting**
- Firebase for frontend
- Heroku for backend



## Future Updates
- QR code generation for packaging
- Google map integration for better tracking
- Wholesaler and retailer management