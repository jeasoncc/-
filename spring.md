spring MVC基本概念

####J2EE的分层模型
领域对象层
数据访问的对象层
Service业务逻辑层
Controller控制器层
View表现层

####Spring MVC执行的流程
1. 用户向服务器发送请求，请求被前端控制器DispatcherServlet截获
2. DispatcherServlet对URL解析后获得URI，调用HandleMapping获得该Handle配置的相关对象
3. DispatcherServlet根据获得的Handle选择合适的HandlerAdapter,HandleAdapter会被用于处理多种Handle
4. 提取请求中的模型数据，开始执行Handle(Controller)
5. Handler执行完成后，向DispatcherServlet返回一个ModelAndView对象
6. 根据返回的ModleAndView对象选择一个合适的视图解析器返回给DispatcherServlet
7. 视图解析器结合Model和View来渲染视图并返回给客户端
