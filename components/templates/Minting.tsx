import { Box, Button, Flex, Text, VStack } from '@chakra-ui/react'
import { useContext } from 'react'
import { NftContractContext } from '../../contexts/NftContractProvider'
import { useConnectWallet } from '../../hooks/useConnectWallet'
import { useMint } from '../../hooks/useMint'
import { Fade } from '../elements/Fade'
import { NftImagesSlideShow } from '../elements/NftImagesSlideShow'

import { useAddress } from '@thirdweb-dev/react'

const Component: React.FC = () => {
  const store = useContext(NftContractContext)
  const address = useAddress()

  const { mint } = useMint()
  const { connectWallet } = useConnectWallet()

  return (
    <Flex
      maxW={'8xl'}
      justifyContent="center"
      h="100%"
      alignItems="center"
      mx="auto"
    >
      <Fade>
      <img src="/assets/bg/wedding.jpg"></img>
        <VStack spacing={6}>
        
          <div>
            {address ? (
              <Button onClick={mint} disabled={store.isClaiming}>
                {store.isClaiming
                  ? 'claiming...'
                  : `MINT (${store.claimPrice} ETH)`}
              </Button>
            ) : (
              <Button onClick={connectWallet}>
                <Text fontSize="s">結婚を認める(Connect Wallet)</Text>
              </Button>
            )}
            <Text pt={2} fontSize="xs" textAlign={'center'}>
              {store.claimedSupply} / {store.totalSupply}
            </Text>
            <Text pt={2} fontSize="xs" textAlign={'center'}>
              2人の結婚を認めていただける方は、<br></br>上の「結婚を認める」ボタンを押してください。<br></br>Polygon(MATIC) Mainnet
            </Text>
          </div>
        </VStack>
      </Fade>
    </Flex>
  )
}

export { Component as Minting }
