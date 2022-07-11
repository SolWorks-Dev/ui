
import React, { FC } from "react";
import "../../common.css";
import NetworkStatusBar from "../NetworkStatusBar";
import { Grid } from '@mantine/core';
import { ActionCard } from "../ActionCard";
import { Heading } from "../Heading";
import { SecondaryButton } from "../SecondaryButton";
import { ApplicationCardMini } from "../ApplicationCardMini";
import { ApplicationCardLargeV2 } from "../ApplicationCardLargeV2";

export const ExampleHomePage = () => {

    return (
        <div style={{backgroundColor: 'var(--background)', height: '100%', width: '100%'}}>
            <NetworkStatusBar 
                transactionsPerSecond={235}
                solusdPrice={33.33}
                solgbpPrice={28.88}
            />

            <div className="body-wrapper">
                <Grid gutter="xl">
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ActionCard 
                            title="First time here? gm 👋"
                            text={<>SolApps is a directory of the best Solana protocols and communities.
                            <br/><br/>
                            No more searching for verified protocol links. Read our getting started guide.</>}
                            actionLink=""
                            actionButtonText="Learn more"
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ActionCard 
                            title="Are we missing a protocol? 🕵️‍♀️"
                            text={<>Contact us if you want to see a protocol or community on SolApps ✉️
                            <br/><br/>
                            Submissions can take up to 1 week to review a protocol.</>}
                            actionLink=""
                            actionButtonText="Apply now"
                        />
                    </Grid.Col>
                </Grid>


                <Grid gutter="xl" style={{marginTop: '30px'}}>
                    <Grid.Col xs={8} md={8} lg={10}>
                        <Heading text="Curated" />
                    </Grid.Col>
                    <Grid.Col xs={4} md={4} lg={2}>
                        <SecondaryButton text="See more" onClick={() => {console.log('onClick')}} additionalStyles={{marginLeft: 'auto', marginRight: 0}} />
                    </Grid.Col>
                </Grid>
                <Grid gutter="xl" justify={'space-between'} style={{marginTop: '20px'}}>
                    <Grid.Col xs={12} md={4} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
                            appName="Raydium"
                            tag="AMM"
                            tagColor='purple'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={4} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://metal.equinix.com/media/pages/images/0ff8033cf9437c213ee13937b1c4c455/79hX-genesysgo.svg"
                            appName="GenesysGo"
                            tag="Infrastructure"
                            tagColor='orange'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={4} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
                            appName="Orca"
                            tag="AMM"
                            tagColor='purple'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={4} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg"
                            appName="Saber"
                            tag="AMM"
                            tagColor='purple'
                        />
                    </Grid.Col>
                </Grid>


                <Grid gutter="xl" style={{marginTop: '30px'}}>
                    <Grid.Col xs={9} md={9} lg={10}>
                        <Heading text="AMMs" />
                    </Grid.Col>
                    <Grid.Col xs={3} md={3} lg={2}>
                        <SecondaryButton text="See more" onClick={() => {console.log('onClick')}} additionalStyles={{marginLeft: 'auto', marginRight: 0}} />
                    </Grid.Col>
                </Grid>
                <Grid gutter="xl" style={{marginTop: '20px'}}>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/4k3Dyjzvzp8eMZWUXbBCjEvwSkkk59S5iCNLY3QrkX6R/logo.png"
                            appName="Raydium"
                            description="Automated market maker (AMM) utilising Serum’s on-chain central order book for trading."
                            height={250}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://www.orca.so/static/media/orca.0284041e.svg"
                            appName="Orca"
                            description="Automated market maker (AMM) enabling low-fee, near-instant token swaps. Tackling UX for the masses."
                            additionalStyles={{marginLeft: 'auto', marginRight: 0}}
                            height={250}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://raw.githubusercontent.com/solana-labs/token-list/main/assets/mainnet/Saber2gLauYim4Mvftnrasomsv6NvAuncvMEZwcLpD1/logo.svg"
                            appName="Saber"
                            description="Automated market maker (AMM) optimized for trading pegged assets."
                            height={250}
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://solend.fi/assets/tokens/slnd.png"
                            appName="Solend"
                            description="Algorithmic, decentralized protocol for lending and borrowing."
                            additionalStyles={{marginLeft: 'auto', marginRight: 0}}
                            height={250}
                        />
                    </Grid.Col>
                </Grid>


                <Grid gutter="xl" style={{marginTop: '30px'}}>
                    <Grid.Col xs={8} md={8} lg={10}>
                        <Heading text="NFT Communities" />
                    </Grid.Col>
                    <Grid.Col xs={4} md={4} lg={2}>
                        <SecondaryButton text="See more" onClick={() => {console.log('onClick')}} additionalStyles={{marginLeft: 'auto', marginRight: 0}} />
                    </Grid.Col>
                </Grid>
                <Grid gutter="xl" justify={'space-between'} style={{marginTop: '20px'}}>
                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://bafybeicwsd4if6yxgunl4x4czy3kp2i7fzwppvbkaj4l3touqhjw4z2wfa.ipfs.dweb.link/"
                            appName="Just Ape"
                            description="A collection of 10,000 Apes that take us back to basics. None of the fluff, all of the value."
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://greatgoats.io/assets/images/icon.png"
                            appName="Great Goats"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://bafkreidgfsdjx4nt4vctch73hcchb3pkiwic2onfw5yr4756adchogk5de.ipfs.dweb.link/"
                            appName="Okay Bears"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>


                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://bafybeifnx4apyushfc3i2tg5wx2xgudcfxgisd2sven2mhxixpghuo2jeu.ipfs.dweb.link/"
                            appName="Primates"
                            description="Aiming to create a brand that facilitates a seamless adoption of the web3 space through our community fueled ventures and collaborations."
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://creator-hub-prod.s3.us-east-2.amazonaws.com/gothic_degens_pfp_1654733979006.png"
                            appName="Gothic Degens"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://dl.airtable.com/.attachmentThumbnails/408f2a34f3ee1f67856cca3a226d71ab/9679778e"
                            appName="DegenTown"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>


                    <Grid.Col xs={12} md={6} lg={6}>
                        <ApplicationCardLargeV2
                            logoUrl="https://i.imgur.com/fO3tI1t.png"
                            appName="DeGods"
                            description="A collection of degenerates, punks, and misfits. Gods of the metaverse & masters of our own universe. DeGods can be converted to DeadGods with DUST."
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://i.imgur.com/iFgvQva.png"
                            appName="Trippin' Ape Tribe"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>
                    <Grid.Col xs={12} md={3} lg={3}>
                        <ApplicationCardMini 
                            logoUrl="https://dl.airtable.com/.attachmentThumbnails/b1aabaad68ef1a7512de6a0ddd15f38d/47c53a89"
                            appName="Blocksmith Labs"
                            tag="NFT"
                            tagColor='light-blue'
                        />
                    </Grid.Col>
                </Grid>
            </div>
            <div style={{height: '100px'}}>

            </div>
        </div>
    );
}