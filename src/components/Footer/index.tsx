import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-layout';

export default () => {
  var style = {'border-bottom':'1px solid currentColor'};
  return (
  <footer id="page-footer" className="bg-body-light">
  <div className="content py-0">
    <div className="row font-size-sm">
      <div className="col-sm-6 order-sm-2 mb-1 mb-sm-0 text-center text-sm-right" style={{color:'#343a40'}}>
        inspired by <a href='https://github.com/v2board/v2board' style={style}>V2board Project</a>
      </div>
      <div className="col-sm-6 order-sm-1 text-center text-sm-left">
      <a href='https://github.com/po1son7/v3board-user' style={style}>V3Board</a>&nbsp;&middot;
        Made with&nbsp;<i className="fa fa-heart text-danger" />&nbsp;by&nbsp;<a href='#' style={style}>Lisp</a>
<span data-toggle="year-copy" />
      </div>
    </div>
  </div>
</footer>
);
}
