/** 响应数据类型 */
export interface ResData<T> {
  data: T
  statusCode: number
  message: string
  timestamp: number
}

/** 分页请求参数 */
export interface ReqPagination {
  pageNum: number
  pageSize: number
}

/** 分页响应数据类型 */
export interface ResPagination<T> {
  data: T[]
  pageNum: number
  pageSize: number
  total: number
}

/** 响应或请求数据相关类型-冥想课程模块 */
export namespace Course {
  /** 冥想分页请求参数 */
  export interface ReqCourseParams extends ReqPagination {
    level: number
  }

  /** 响应的冥想课程数据类型 */
  export interface ResCourse {
    id: number
    name: string
    cover: string
    describe: string
    level: number
    viewCount: number
    detailContent: string
    audioUrl: string
    duration: number
    createTime: string
    updateTime: string
  }
}
