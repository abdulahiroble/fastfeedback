import React from 'react';
import { Box, Link, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { parseISO, format } from 'date-fns';
import NextLink from "next/link"
import Image from "next/image";

const SiteTable = ({ sites }) => {
    return (
        <Table>
            <thead>
                <Tr>
                    <Th>Name</Th>
                    <Th>Site Link</Th>
                    <Th>Feedback Link</Th>
                    <Th>Date Added</Th>
                    <Th>{''}</Th>
                </Tr>
            </thead>
            <tbody>
                {sites?.map((site) => (
                    <Box as="tr" key={site.url}>
                        <Td fontWeight="bold">
                            {/* <Skeleton isLoaded>
                                <Image width={200}
                                    height={300}
                                    src="/1200x0.jpg"
                                    alt="banner"
                                />
                            </Skeleton> */}
                            {site.name}
                        </Td>
                        <Td>
                            {site.url}
                        </Td>
                        <Td>
                            <NextLink href="/p/[siteId]" as={`/p/${site.id}`} passHref>
                                <Link color="blue.500" fontWeight="medium">View Feedback</Link>
                            </NextLink>
                        </Td>
                        <Td>
                            {format(parseISO(site.createdAt), "PPpp")}
                        </Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
};

export default SiteTable;