import { http } from '@/api'
import type { Course, ResPagination } from '@/api/interface/index'

/**
 * 获取冥想课程列表数据
 */
export function getCourseList(query?: Record<string, any>) {
  return http<ResPagination<Course.ResCourse>>({
    url: '/course/getCourseList',
    method: 'GET',
    query
  })
}

/**
 * 获取冥想详情数据
 */
export function getCourseDetail(id: number) {
  return http<Course.ResCourse>({
    url: `/course/getCourseDetail/${id}`,
    method: 'GET'
  })
}
