import React from 'react';
import { Box, Link, Skeleton } from '@chakra-ui/react';
import { Table, Tr, Th, Td } from './Table';
import { parseISO, format } from 'date-fns';
import NextLink from "next/link"

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
                    <Box as="tr" key={site.id}>
                        <Td>
                            <NextLink
                                href="/site/[siteId]"
                                as={`site/${site.id}`}
                                passHref
                            >
                                <Link fontWeight="medium">{site.name}</Link>
                            </NextLink>
                        </Td>
                        <Td>
                            <Link href={site.url} isExternal>
                                {site.url}
                            </Link>
                        </Td>
                        <Td>
                            <NextLink
                                href="/site/[siteId]"
                                as={`/site/${site.id}`}
                                passHref
                            >
                                <Link color="blue.500" fontWeight="medium">
                                    View Feedback
                                </Link>
                            </NextLink>
                        </Td>
                        <Td>{format(parseISO(site.createdAt), "PPpp")}</Td>
                    </Box>
                ))}
            </tbody>
        </Table>
    );
};

export default SiteTable;