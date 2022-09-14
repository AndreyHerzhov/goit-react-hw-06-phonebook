import styled from "styled-components";

export const ListItem = styled.li`
align-items: center;
justify-content: space-between;
display: flex;
margin-bottom: 5px;
`

export const List = styled.ul`

`

export const DeleteButton = styled.button`
    
  background-color: #fff;
  background-image: none;
  background-position: 0 90%;
  background-repeat: repeat no-repeat;
  background-size: 4px 3px;
  border-radius: 15px 225px 255px 15px 15px 255px 225px 15px;
  border-style: solid;
  border-width: 2px;
  box-shadow: rgba(0, 0, 0, .2) 15px 28px 25px -18px;
  box-sizing: border-box;
  color: #41403e;
  cursor: pointer;
  display: inline-block;
  font-family: Neucha, sans-serif;
  width: 100px;
  outline: none;
  padding: .75rem;
  text-decoration: none;
  transition: all 235ms ease-in-out;
  border-bottom-left-radius: 15px 255px;
  border-bottom-right-radius: 225px 15px;
  border-top-left-radius: 255px 15px;
  border-top-right-radius: 15px 225px;
  user-select: none;
  -webkit-user-select: none;
  touch-action: manipulation;
 

&:hover {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 8px -5px;
   
}

&:focus {
  box-shadow: rgba(0, 0, 0, .3) 2px 8px 4px -6px;
}

&:active{
    transform: translateY(10px);
}
  
`

export const ContactListCard = styled.div`
   display: flex;
   overflow-y: scroll;
    flex-direction: column;
    padding: 20px;
    width: 400px;
    height: 220px;
    border: 1px solid grey;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
`

export const ContactListInfo = styled.p`
    font-size: 16px;
    line-height: 1.33;
    font-weight: 400;
`