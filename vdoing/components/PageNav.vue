<template>
  <div class="page-nav-wapper">
    <!-- 页面中间左右翻页 -->
    <div
      class="page-nav-centre-wrap"
      v-if="$themeConfig.pageButton !== false && (prev || next)"
    >
      <router-link
        class="page-nav-centre page-nav-centre-prev"
        v-if="prev"
        :to="prev.path"
        @mouseenter.native="showTooltip($event)"
        @mousemove.native="showTooltip($event)"
      >
        <div class="tooltip">{{ prev.title || prev.path }}</div>
      </router-link>

      <router-link
        class="page-nav-centre page-nav-centre-next"
        v-if="next"
        :to="next.path"
        @mouseenter.native="showTooltip($event)"
        @mousemove.native="showTooltip($event)"
      >
        <div class="tooltip">{{ next.title || next.path }}</div>
      </router-link>
    </div>

    <!-- 底部翻页按钮 -->
    <div
      class="page-nav"
      v-if="prev || next"
    >
      <p class="inner">
        <span
          v-if="prev"
          class="prev"
        >
        <svg t="1724076498684" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1283" width="14" height="14"><path d="M15.470529 551.636974l414.348542 456.09622a54.488113 54.488113 0 0 0 75.305075 0 50.44985 50.44985 0 0 0 0-72.916243l-322.207892-366.856294h783.707422A56.308175 56.308175 0 0 0 1023.557497 512.107497a56.308175 56.308175 0 0 0-56.933821-55.853159H181.3237l323.800446-368.505725a50.392973 50.392973 0 0 0 0-72.859366 54.488113 54.488113 0 0 0-75.305075 0L15.470529 470.985466a49.994834 49.994834 0 0 0-14.788006 40.325754 50.051711 50.051711 0 0 0 14.788006 40.325754z" fill="#41b883" p-id="1284"></path></svg>
          <router-link
            v-if="prev"
            class="prev"
            :to="prev.path"
          >{{ prev.title || prev.path }}</router-link>
        </span>

        <span
          v-if="next"
          class="next"
        >
          <router-link
            v-if="next"
            :to="next.path"
          >{{ next.title || next.path }}</router-link>
          <svg t="1724076616280" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1455" width="14" height="14"><path d="M1004.032 551.537778l-356.124444 456.192a54.044444 54.044444 0 0 1-74.979556 0 50.631111 50.631111 0 0 1 0-72.931556l264.305778-366.933333H56.832A56.32 56.32 0 0 1 0.056889 512a56.32 56.32 0 0 1 56.775111-55.864889h782.051556l-265.955556-368.583111a50.631111 50.631111 0 0 1 0-72.874667 54.044444 54.044444 0 0 1 74.979556 0l356.124444 456.192c11.377778 11.036444 21.048889 26.624 19.911111 41.073778 1.137778 14.449778-8.533333 28.501333-19.911111 39.594667z" fill="#41b883" p-id="1456"></path></svg>
        </span>
      </p>
    </div>
  </div>
</template>
<script>
import { resolvePage } from '../util'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default {
  name: 'PageNav',
  props: ['sidebarItems'],
  computed: {
    prev () {
      return resolvePageLink(LINK_TYPES.PREV, this)
    },

    next () {
      return resolvePageLink(LINK_TYPES.NEXT, this)
    }
  },
  methods: {
    showTooltip (e) {

      const clientW = document.body.clientWidth
      const X = e.clientX
      const tooltipEle = e.target.querySelector('.tooltip')
      if (!tooltipEle) {
        return
      }

      const tooltipEleStyle = tooltipEle.style
      if (X < clientW / 2) {
        tooltipEleStyle.right = null
        tooltipEleStyle.left = X + 10 + 'px'
      } else {
        tooltipEleStyle.left = null
        tooltipEleStyle.right = clientW - X + 10 + 'px'
      }
      tooltipEleStyle.top = e.clientY + 10 + 'px'
    }
  }
}

function resolvePrev (page, items) {
  return find(page, items, -1)
}

function resolveNext (page, items) {
  return find(page, items, 1)
}

const LINK_TYPES = {
  NEXT: {
    resolveLink: resolveNext,
    getThemeLinkConfig: ({ nextLinks }) => nextLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.next
  },
  PREV: {
    resolveLink: resolvePrev,
    getThemeLinkConfig: ({ prevLinks }) => prevLinks,
    getPageLinkConfig: ({ frontmatter }) => frontmatter.prev
  }
}

function resolvePageLink (
  linkType,
  { $themeConfig, $page, $route, $site, sidebarItems }
) {
  const { resolveLink, getThemeLinkConfig, getPageLinkConfig } = linkType

  // Get link config from theme
  const themeLinkConfig = getThemeLinkConfig($themeConfig)

  // Get link config from current page
  const pageLinkConfig = getPageLinkConfig($page)

  // Page link config will overwrite global theme link config if defined
  const link = isNil(pageLinkConfig) ? themeLinkConfig : pageLinkConfig

  if (link === false) {
    return
  } else if (isString(link)) {
    return resolvePage($site.pages, link, $route.path)
  } else {
    return resolveLink($page, sidebarItems)
  }
}

function find (page, items, offset) {
  const res = []
  flatten(items, res)
  for (let i = 0; i < res.length; i++) {
    const cur = res[i]
    if (cur.type === 'page' && cur.path === decodeURIComponent(page.path)) {
      return res[i + offset]
    }
  }
}

function flatten (items, res) {
  for (let i = 0, l = items.length; i < l; i++) {
    if (items[i].type === 'group') {
      flatten(items[i].children || [], res)
    } else {
      res.push(items[i])
    }
  }
}
</script>
<style lang="stylus">
@require '../styles/wrapper.styl'

.page-nav
  @extend $wrapper
  padding-top 1rem
  padding-bottom 0
  .inner
    min-height 2rem
    margin-top 0
    border-top 1px solid var(--borderColor)
    padding-top 1rem
    overflow auto // clear float
  .next
    float right
.page-nav-centre-wrap
  .page-nav-centre
    position fixed
    top 50%
    width 80px
    height 70px
    margin-top -35px
    outline 0
    transition all 0.2s
    border-radius 3px
    opacity 0.55
    z-index 99
    @media (max-width 1340px)
      width 50px
    @media (max-width 960px)
      display none
    &:hover
      background rgba(153, 153, 153, 0.15)
      opacity 1
      .tooltip
        display block
    &:before
      content ''
      display block
      width 10px
      height 10px
      border-top 2px solid #999
      border-right 2px solid #999
      position absolute
      top 0
      right 0
      bottom 0
      left 0
      margin auto
    .tooltip
      display none
      background rgba(0, 0, 0, 0.5)
      color #fff
      padding 4px 8px
      font-size 13px
      border-radius 3px
      position fixed
      max-width 200px
      z-index 99
  .page-nav-centre-prev
    left 0
    &:before
      transform rotate(-135deg)
  .page-nav-centre-next
    right 0
    &:before
      transform rotate(45deg)
.sidebar-open .page-nav-centre-wrap .page-nav-centre-prev
  left $sidebarWidth
.no-sidebar .page-nav-centre-wrap .page-nav-centre-prev
  left 0
</style>
