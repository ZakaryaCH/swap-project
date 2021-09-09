import React, { useRef } from 'react'
import { BookOpen, Send, Youtube, Twitter, AlignJustify, AtSign, PenTool, Instagram } from 'react-feather'
// import { BookOpen, Send, Youtube, Instagram, Twitter, AlignJustify, AtSign, PenTool, Bell } from 'react-feather'
import styled from 'styled-components'
// import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
// import { ReactComponent as MenuIcon } from '../../assets/images/menu.svg'
import { useActiveWeb3React } from '../../hooks'
import { useOnClickOutside } from '../../hooks/useOnClickOutside'
import { ApplicationModal } from '../../state/application/actions'
import { useModalOpen, useToggleModal } from '../../state/application/hooks'

import { ExternalLink } from '../../theme'
import { NavLink } from 'react-router-dom'
import { ButtonPrimary } from '../Button'
import { darken } from 'polished'
const activeClassName = 'ACTIVE'

// const StyledMenuIcon = styled(MenuIcon)`
//   path {
//     stroke: ${({ theme }) => theme.text1};
//   }
// `

// const StyledMenuButton = styled.button`
//   width: 100%;
//   height: 100%;
//   border: none;
//   background-color: transparent;
//   margin: 0;
//   padding: 0;
//   height: 35px;
//   background-color: ${({ theme }) => theme.bg3};
//
//   padding: 0.15rem 0.5rem;
//   border-radius: 0.5rem;
//
//   :hover,
//   :focus {
//     cursor: pointer;
//     outline: none;
//     background-color: ${({ theme }) => theme.bg4};
//   }
//
//   svg {
//     margin-top: 2px;
//   }
// `

const StyledMenu = styled.div`
  margin-left: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  border: none;
  text-align: left;
`

const MenuFlyout = styled.span`
  min-width: 11.5rem;
  background-color: ${({ theme }) => theme.bg3};
  box-shadow: 0px 0px 1px rgba(0, 0, 0, 0.01), 0px 4px 8px rgba(0, 0, 0, 0.04), 0px 16px 24px rgba(0, 0, 0, 0.04),
    0px 24px 32px rgba(0, 0, 0, 0.01);
  border-radius: 12px;
  padding: 0.5rem;
  display: flex;
  flex-direction: column;
  font-size: 1rem;
  position: absolute;
  top: 4rem;
  right: 0rem;
  z-index: 100;

  ${({ theme }) => theme.mediaWidth.upToMedium`
    top: -17.25rem;
  `};
`

const MenuItem = styled(ExternalLink)`
  flex: 1;
  padding: 0.5rem 0.5rem;
  color: ${({ theme }) => theme.text2};
  :hover {
    color: ${({ theme }) => theme.text1};
    cursor: pointer;
    text-decoration: none;
  }
  > svg {
    margin-right: 8px;
  }
`

const StyledNavLink = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
`

const StyledNavLink2 = styled(NavLink).attrs({
  activeClassName
})`
  ${({ theme }) => theme.flexRowNoWrap}
  align-items: left;
  border-radius: 3rem;
  outline: none;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.text2};
  font-size: 1rem;
  width: fit-content;
  margin: 0 12px;
  font-weight: 500;

  &.${activeClassName} {
    border-radius: 12px;
    font-weight: 600;
    color: ${({ theme }) => theme.text1};
  }

  :hover,
  :focus {
    color: ${({ theme }) => darken(0.1, theme.text1)};
  }
  background-color: #153d6f70;
  border: 1px solid #153d6f70;
  color: #6da8ff;
  border-radius: 10px;
  padding: 5px 5px;
  margin: 0px;

`

// const CODE_LINK = 'https://github.com/Uniswap/uniswap-interface'

export default function Menu() {
  const { account } = useActiveWeb3React()

  const node = useRef<HTMLDivElement>()
  const open = useModalOpen(ApplicationModal.MENU)
  const toggle = useToggleModal(ApplicationModal.MENU)
  useOnClickOutside(node, open ? toggle : undefined)
  const openClaimModal = useToggleModal(ApplicationModal.ADDRESS_CLAIM)

  return (
    // https://github.com/DefinitelyTyped/DefinitelyTyped/issues/30451
    <StyledMenu ref={node as any}>
      <StyledNavLink2 onClick={toggle} to={'#'}>
        {/* <StyledMenuIcon /> */}
        Loans
      </StyledNavLink2>
      <StyledNavLink onClick={toggle} to={'#'}>
        {/* <StyledMenuIcon /> */}
        Links
      </StyledNavLink>

      {open && (
        <MenuFlyout>
          <MenuItem id="link" href="https://www.reddit.com/user/PogoSwap">
            <PenTool size={14} />
            Reddit
          </MenuItem>
          <MenuItem id="link" href="https://pogoswap.io/">
            <AtSign size={14} />
            About
          </MenuItem>
          <MenuItem id="link" href="https://twitter.com/pogoswap">
            <Twitter size={14} />
            Twitter
          </MenuItem>
          <MenuItem id="link" href="https://medium.com/@pogoswap">
            <AlignJustify size={14} />
            Medium
          </MenuItem>
          <MenuItem id="link" href="https://www.instagram.com/pogoswap">
            <Instagram size={14} />
            Instagram
          </MenuItem>
          <MenuItem id="link" href="https://www.youtube.com/channel/UCiSOxpIRlIf5O2mm4YlmUVw">
            <Youtube size={14} />
            Youtube
          </MenuItem>
          <MenuItem id="link" href="https://t.me/pogoswap_official">
            <Send size={14} />
            Telegram
          </MenuItem>
          {/* <MenuItem id="link" href="#">
            <Bell size={14} />
            Discord
          </MenuItem> */}
          <MenuItem id="link" href="./pogoswap.pdf">
            <BookOpen size={14} />
            Whitepaper
          </MenuItem>
          <MenuItem id="link" href="https://etherscan.io/address/0x56A954019Fe3bc317b9d76754C7D0221FAA7Ae82">
            <AtSign size={14} />
            Smart Contract
          </MenuItem>

          {account && (
            <ButtonPrimary onClick={openClaimModal} padding="8px 16px" width="100%" borderRadius="12px" mt="0.5rem">
              Claim POGO
            </ButtonPrimary>
          )}
        </MenuFlyout>
      )}
    </StyledMenu>
  )
}
