<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


$layoutStyle = 'gridview';

if ( $attributes['postsStyles'] && $attributes['postsStyles']['postsLayout'] === 'list' ) {
	$layoutStyle = 'listview';
}

$post_args = array(
	'posts_per_page' => 10,
	'paged'          => 1,
	'order'          => 'desc',
	'orderby'        => 'date',
	'post_type'      => 'post',
	'post_status'    => 'publish',
	'search'         => '',
);

if ( $attributes['postsSettings'] ) {
	if ( $attributes['postsSettings']['search'] ) {
		$post_args['search'] = $attributes['postsSettings']['search'];
	}
	if ( $attributes['postsSettings']['perPage'] ) {
		$post_args['posts_per_page'] = $attributes['postsSettings']['perPage'];
	}
	if ( $attributes['postsSettings']['currentPage'] ) {
		$post_args['paged'] = $attributes['postsSettings']['currentPage'];
	}
	if ( $attributes['postsSettings']['order'] ) {
		$post_args['order'] = $attributes['postsSettings']['order'];
	}
	if ( $attributes['postsSettings']['orderBy'] ) {
		$post_args['orderby'] = $attributes['postsSettings']['orderBy'];
	}
}

$wp_posts = new WP_Query( $post_args );

?>
<div <?php echo get_block_wrapper_attributes(); ?>>
    <div class="container">
        <div class="gridlist-container">
            <div class="gridlist <?php
			echo esc_attr( $layoutStyle ); ?>">
				<?php
				if ( $wp_posts->have_posts() ) {
					while ( $wp_posts->have_posts() ) {
						$wp_posts->the_post();
						$postTitle    = get_the_title();
						$postLink     = get_the_permalink();
						$featured_img = get_the_post_thumbnail_url( get_the_ID(), 'full' );
						$featured_img = $featured_img ? $featured_img : 'https://via.placeholder.com/150';
						?>
                        <div class="item is-collapsed">
                            <div class="item-container ">
                                <div class="item-cover">
                                    <div class="avatar">
                                        <img src="<?php echo esc_url( $featured_img ); ?>" alt="avatar"/>
                                    </div>
                                </div>
                                <div class="item-content">
                                    <a class="subhead-1 activator" href="<?php echo esc_url( $postLink ); ?>"><?php echo esc_html( $postTitle ); ?></a>
                                </div>
                            </div>
                        </div>
						<?php
					}
				}
				wp_reset_postdata();
				?>

            </div>
        </div>
    </div>
</div>

