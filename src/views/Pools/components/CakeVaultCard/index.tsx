import styled from 'styled-components'
import {
  Box,
  CardBody,
  Flex,
  Text,
  CardProps,
  HelpIcon,
  useTooltip,
  LinkExternal,
  Link,
  TokenPairImage,
} from '@pancakeswap/uikit'
import { useTranslation } from 'contexts/Localization'
import { useWeb3React } from '@web3-react/core'
import ConnectWalletButton from 'components/ConnectWalletButton'
import { useIfoPoolCreditBlock, useVaultPoolByKey } from 'state/pools/hooks'
import { DeserializedPool, VaultKey } from 'state/types'
import { convertSharesToCake } from 'views/Pools/helpers'
import { FlexGap } from 'components/Layout/Flex'
import { vaultPoolConfig } from 'config/constants/pools'
import { getBscScanLink } from 'utils'
import useTheme from 'hooks/useTheme'
import AprRow from '../PoolCard/AprRow'
import { StyledCard } from '../PoolCard/StyledCard'
import CardFooter from '../PoolCard/CardFooter'
import PoolCardHeader, { PoolCardHeaderTitle } from '../PoolCard/PoolCardHeader'
import VaultCardActions from './VaultCardActions'
import UnstakingFeeCountdownRow from './UnstakingFeeCountdownRow'
import RecentCakeProfitRow from './RecentCakeProfitRow'

const StyledCardBody = styled(CardBody) <{ isLoading: boolean }>`
  // min-height: ${({ isLoading }) => (isLoading ? '0' : '254px')};
  padding: 0 30px 0 30px;
`

const StyledCardBodyTop = styled.div`
  background: none;
  margin: 0 0 24px 0;
`

const StyledCardBodyInfoBox = styled(Box) <{ $bgColor?: string, $borderColor?: string }>`
  background: ${(props) => props.$bgColor || ''};
  border: 1px solid ${(props) => props.$borderColor || ''};
  box-sizing: border-box;
  border-radius: 10px;
  align-self: stretch;
  margin: 0 0 0px 0;
  padding: 16px;
`

const StyledCardFooterWrapper = styled.div`
  margin: 24px 30px 24px 30px;
`

interface CakeVaultProps extends CardProps {
  pool: DeserializedPool
  showStakedOnly: boolean
  defaultFooterExpanded?: boolean
}

export const CreditCalcBlock = () => {
  const { creditStartBlock, creditEndBlock, hasEndBlockOver } = useIfoPoolCreditBlock()
  const { t } = useTranslation()
  const { theme } = useTheme()

  const { tooltip, tooltipVisible, targetRef } = useTooltip(
    hasEndBlockOver ? (
      <>
        <Text>
          {t(
            'The latest credit calculation period has ended. After the coming IFO, credits will be reset and the calculation will resume.',
          )}
        </Text>
        <LinkExternal href="https://twitter.com/pancakeswap">
          {t('Follow us on Twitter to catch the latest news about the coming IFO.')}
        </LinkExternal>
      </>
    ) : (
      <>
        <Text>
          {t(
            'The start block of the current calculation period. Your average IFO CAKE Pool staking balance is calculated throughout this period.',
          )}
        </Text>
        <LinkExternal href="https://medium.com/pancakeswap/initial-farm-offering-ifo-3-0-ifo-staking-pool-622d8bd356f1">
          {t('Check out our Medium article for more details.')}
        </LinkExternal>
      </>
    ),
    { placement: 'auto' },
  )

  return (
    <Flex mt="8px" justifyContent="space-between">
      <Text color={theme.isDark ? '#fff' : '#000'} fontSize="14px">
        {hasEndBlockOver ? t('Credit calculation ended:') : t('Credit calculation starts:')}
      </Text>
      <Flex mr="6px" alignItems="center">
        <Link
          external
          href={getBscScanLink(hasEndBlockOver ? creditEndBlock : creditStartBlock, 'block')}
          mr="4px"
          color={hasEndBlockOver ? 'warning' : 'primary'}
          fontSize="14px"
          style={{ color: theme.colors.itemPrimary }}
        >
          {hasEndBlockOver ? creditEndBlock : creditStartBlock}
        </Link>
        <span ref={targetRef}>
          <HelpIcon color={theme.colors.itemPrimary} />
        </span>
      </Flex>
      {tooltipVisible && tooltip}
    </Flex>
  )
}

const CakeVaultCard: React.FC<CakeVaultProps> = ({ pool, showStakedOnly, defaultFooterExpanded, ...props }) => {
  const { t } = useTranslation()
  const { theme } = useTheme()
  const { account } = useWeb3React()
  const {
    userData: { userShares, isLoading: isVaultUserDataLoading },
    fees: { performanceFeeAsDecimal },
    pricePerFullShare,
  } = useVaultPoolByKey(pool.vaultKey)

  const { cakeAsBigNumber } = convertSharesToCake(userShares, pricePerFullShare)

  const accountHasSharesStaked = userShares && userShares.gt(0)
  const isLoading = !pool.userData || isVaultUserDataLoading

  if (showStakedOnly && !accountHasSharesStaked) {
    return null
  }

  return (
    <StyledCard
      isActive
      {...props}
      cBgColor={theme.isDark ? theme.colors.bgDarkWeaker : '#fff'}
      cBorderColor={theme.isDark ? theme.colors.itemBlueUnhighlight : '#fff'}
    >
      <PoolCardHeader isStaking={accountHasSharesStaked}>
        <PoolCardHeaderTitle
          title={vaultPoolConfig[pool.vaultKey].name}
          subTitle={vaultPoolConfig[pool.vaultKey].description}
        />
        <TokenPairImage {...vaultPoolConfig[pool.vaultKey].tokenImage} width={64} height={64} />
      </PoolCardHeader>
      <StyledCardBody isLoading={isLoading}>
        {/* Body - section 1: */}
        <StyledCardBodyTop>
          <AprRow pool={pool} stakedBalance={cakeAsBigNumber} performanceFee={performanceFeeAsDecimal} />
          {pool.vaultKey === VaultKey.IfoPool && <CreditCalcBlock />}
        </StyledCardBodyTop>
        {/* Body - section 2: */}
        <FlexGap mt="0px" gap="24px" flexDirection={accountHasSharesStaked ? 'column-reverse' : 'column'}>
          <StyledCardBodyInfoBox
            $bgColor={theme.isDark ? theme.colors.bgDark : theme.colors.bgBright}
            $borderColor={theme.isDark ? theme.colors.itemBlueUnhighlight : theme.colors.bgBright}
          >
            <Box mt="0px">
              <RecentCakeProfitRow pool={pool} />
            </Box>
            <Box mt="8px">
              <UnstakingFeeCountdownRow
                vaultKey={pool.vaultKey}
                style={{ color: `${theme.colors.itemPrimary}`, textDecoration: 'underline' }}
              />
            </Box>
          </StyledCardBodyInfoBox>
          <Flex flexDirection="column" mb="0px">
            {account ? (
              <VaultCardActions
                pool={pool}
                accountHasSharesStaked={accountHasSharesStaked}
                isLoading={isLoading}
                performanceFee={performanceFeeAsDecimal}
              />
            ) : (
              <>
                <Text mb="10px" textTransform="uppercase" fontSize="12px" color={theme.colors.itemPrimary} bold>
                  {t('Start earning')}
                </Text>
                <ConnectWalletButton />
              </>
            )}
          </Flex>
        </FlexGap>
      </StyledCardBody>

      <StyledCardFooterWrapper>
        <CardFooter
          defaultExpanded={defaultFooterExpanded}
          pool={pool}
          account={account}
          txtColor={theme.isDark ? '#fff' : '#000'}
          txtColorMain={theme.colors.itemPrimary}
        />
      </StyledCardFooterWrapper>
    </StyledCard>
  )
}

export default CakeVaultCard
