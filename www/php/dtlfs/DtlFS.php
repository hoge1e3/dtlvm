<?php
require_once __dir__."/../fs/NativeFS.php";
require_once __dir__."/../fs/Permission.php";
require_once __dir__."/../fs/SFile.php";
require_once __dir__."/../dtl/Dtl.php";
require_once __dir__."/DtlSys.php";
//require_once __dir__."/DtlAuth.php";
class DtlFS {
    public static function initRoot($root) {
        //$root->auth=new DtlAuth();
        //$root->homeDir=$root->auth->homeDir();
        $root->FS=new NativeFS("pub/");//$root->auth->getFS();
        //$root->homeDirPath=$root->auth->homeDirPath();
        $root->PathUtil=new PathUtil();
        return $root;
    }
}
?>
