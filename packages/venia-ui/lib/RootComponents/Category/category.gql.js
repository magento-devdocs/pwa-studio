import gql from 'graphql-tag';

export const GET_CATEGORY_DATA = gql`
    query category(
        $id: Int!
        $pageSize: Int!
        $currentPage: Int!
        $onServer: Boolean!
        $filters: ProductAttributeFilterInput!
        $sort: ProductAttributeSortInput
    ) {
        category(id: $id) {
            id
            description
            name
            product_count
            meta_title @include(if: $onServer)
            meta_keywords @include(if: $onServer)
            meta_description
        }
        products(
            pageSize: $pageSize
            currentPage: $currentPage
            filter: $filters
            sort: $sort
        ) {
            items {
                # id is always required, even if the fragment includes it
                id
                # The following values are used by GalleryItem
                name
                price {
                    regularPrice {
                        amount {
                            currency
                            value
                        }
                    }
                }
                small_image {
                    url
                }
                url_key
            }
            page_info {
                total_pages
            }
            total_count
        }
    }
`;
