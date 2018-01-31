using System.Web.Optimization;
using WebHelpers.Mvc5;

namespace ProjetoBase.App_Start
{
    public class BundleConfig
    {
        public static void RegisterBundles(BundleCollection bundles)
        {
            bundles.Add(new StyleBundle("~/Bundles/css")
                .Include("~/Content/bootstrap.min.css", new CssRewriteUrlTransformAbsolute())
                .Include("~/Content/css/bootstrap-select.css")
                .Include("~/Content/css/bootstrap-datepicker3.min.css")
                .Include("~/Content/css/font-awesome.min.css", new CssRewriteUrlTransformAbsolute())
                .Include("~/Content/css/icheck/blue.min.css", new CssRewriteUrlTransformAbsolute())
                .Include("~/Content/css/AdminLTE.css", new CssRewriteUrlTransformAbsolute())
                .Include("~/Content/css/skins/skin-black.css")
                .Include("~/Content/site.css")
                .Include("~/Content/ui-grid.css")
                .Include("~/Content/ui-grid-theme.css")
                .Include("~/Content/jquery.contextMenu.css"));

            bundles.Add(new ScriptBundle("~/Bundles/js")
                .Include("~/Scripts/jquery-3.0.0.js")
                .Include("~/Scripts/bootstrap.js")
                .Include("~/Content/js/plugins/fastclick/fastclick.js")
                .Include("~/Content/js/plugins/slimscroll/jquery.slimscroll.js")
                .Include("~/Content/js/plugins/bootstrap-select/bootstrap-select.js")
                .Include("~/Content/js/plugins/moment/moment.js")
                .Include("~/Content/js/plugins/datepicker/bootstrap-datepicker.js")
                .Include("~/Content/js/plugins/icheck/icheck.js")
                .Include("~/Content/js/plugins/validator.js")
                .Include("~/Content/js/plugins/inputmask/jquery.inputmask.bundle.js")
                .Include("~/Content/js/adminlte.js")
                .Include("~/Content/js/init.js")
                .Include("~/Scripts/angular.js")
                .Include("~/Scripts/angular-touch.js")
                .Include("~/Scripts/angular-animate.js")
                .Include("~/Scripts/ui-grid.js")
                .Include("~/Scripts/app.js")
                .Include("~/Scripts/jquery.contextMenu.js"));

            bundles.Add(new ScriptBundle("~/Bundles/viewsScripts")
                .Include("~/ViewsScripts/ClienteCtrl.js")
                .Include("~/ViewsScripts/ProdutoCtrl.js"));


#if DEBUG
            BundleTable.EnableOptimizations = false;
#else
            BundleTable.EnableOptimizations = true;
#endif
        }
    }
}
