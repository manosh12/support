import {Avatar, Button, Image} from "@nextui-org/react";
import {FaFacebook, FaGithub, FaGitlab, FaHeart, FaLink, FaShare, FaTwitter} from "react-icons/fa";

export const Main = () => {
  return(
    <>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto_1fr] gap-4 w-full max-w-6xl px-4">
          {/* Left Sidebar */}
          <div className="hidden lg:block p-5 rounded-l-[5px] mr-5">
            <ul className="space-y-3 fixed mt-10">
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaHeart /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaFacebook /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaTwitter /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaGithub /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaGitlab /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaLink /></a></li>
              <li><a href="#" className="block p-1 rounded text-2xl text-gray-500"><FaShare /></a></li>
            </ul>
          </div>

          {/* Main Content */}
          <div className="container mx-auto max-w-7xl mt-10 bg-white rounded-[5px]">
            <div className="lg:mx-20 mx-5 py-10">
              <div className="flex gap-3">
                <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d"/> <span className="py-2">@Anonymous</span>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl font-bold">
                  【超初心者向け】PHPをインストールする方法(Windows 7)
                </h1>
                <div className="flex gap-4 mt-3 items-center mx-5">
                  <a href="#" className="py-0.5 text-sm px-2 bg-gray-200 text-gray-600 rounded-[2px]">PHP</a>
                  <a href="#" className="py-0.5 text-sm px-2 bg-gray-200 text-gray-600 rounded-[2px]">Windows</a>
                  <a href="#" className="py-0.5 text-sm px-2 bg-gray-200 text-gray-600 rounded-[2px]">Windows 7</a>
                  <a href="#" className="py-0.5 text-sm px-2 bg-gray-200 text-gray-600 rounded-[2px]">PHP入門講座</a>
                </div>
                <p className="mt-2 mx-5 text-gray-600 text-sm">
                  最終更新日 2018年05月01日投稿日 2018年04月28日
                </p>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl font-bold">はじめに </h1>
                <hr/>
                <p className="mt-5 text-lg text-gray-600">
                  この記事ではタイトルの通り、Windows7においてPHPをインストールする方法を書いています。書くにあたって、初めての方にも伝わりやすいよう画像を多めにしました。
                </p>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl font-bold">ダウンロードと解凍 </h1>
                <hr/>
                <h1 className="mt-5 text-2xl font-bold">ダウンロード </h1>
                <hr/>
                <p className="mt-5 text-gray-600">
                  早速<a href="" className="underline text-blue-600"> PHP </a>をダウンロードしましょう。<br/><br/>

                  <span> リンク先のメインページから「Downloads」をクリックします。</span>
                </p>
                <Image
                  alt="NextUI hero Image"
                  src="/images/img1.png"
                  className="mt-5 w-full"
                />

                <p className="mt-10 text-gray-600">次に、今回OSはWindowsなので「Windows downloads」をクリックします。</p>

                <Image
                  alt="NextUI hero Image"
                  src="/images/img2.png"
                  className="mt-5 w-full"
                />
                <p
                  className="mt-10 text-gray-600">なお、PHPのバージョンですが、個人でプログラミングをするつもりなので、今回は最新版を選択しました。チームで開発などをする際は揃えた方が良いと思います。</p>
                <p className="mt-5 text-gray-600">さて、「Windows
                  downloads」をクリックするとこのような画像になり、ダウンロードするファイルを選択することになります。</p>
                <Image
                  alt="NextUI hero Image"
                  src="/images/img3.png"
                  className="mt-5 w-full"
                />
                <p className="mt-10 text-gray-600">さて、「Windows
                  ここで1つのバージョンに対して4つの選択肢があります。オペレーションシステムが32または64bitのどちらか、そして、Thread
                  SafeかNon Thread Safeかの2×2の4パターンです。</p>
                <p className="mt-5 text-gray-600">32or64bitの選択は他のものをダウンロードする際にもあったかと思いますが、Thread
                  Safeかどうかは私には初見でした。</p>
                <p className="mt-5 text-gray-600">そこで少し脱線しますが、この意味を調べてみました。</p>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl font-bold text-gray-600">Thread Safeとは </h1>
                <hr/>
                <p className="mt-5 text-gray-600">
                  結論を先に書いておくとThread Safeの選択は使用するWebサーバがマルチスレッドに対応しているかどうかに合わせて選択します。
                  Thread Safeはマルチスレッドに対応し、Non Thread Safeはマルチスレッドに非対応です。
                </p>
                <p className="mt-5 text-gray-600">
                  私はWebサーバを用いる場合、マルチスレッドに対応していた方がよさそうだと考えたためThread Safeの方を選択しました。
                  しかし、この判断をするにはマルチスレッドの概要を知る必要があったので、こちらも調べてみました。
                </p>
              </div>
              <div className="mt-10">
                <h1 className="text-2xl font-bold text-gray-600">マルチスレッドとは </h1>
                <hr/>
                <p className="mt-5 text-gray-600">
                  マルチスレッドとは、処理において並行処理が発生するもののことです。
                  例えばサーバの場合マルチスレッドに対応していない場合、サーバにリクエストが複数同時に来た場合は、１つずつ対応することになります。それに対してマルチスレッドの場合は並行して処理することができます。
                </p>
                <p className="mt-5 text-gray-600">そのため、今回はThread
                  Safeの方を選択しました。なお、32,64bitの調べかたは環境変数の節を参照してください。</p>
              </div>
              <div className="mt-10 ">
                <h1 className="text-2xl font-bold text-gray-600">解凍</h1>
                <hr/>
                <p className="mt-5 text-gray-600">
                  脱線してしまいましたが、4つのうちから1つ選択したら、圧縮ファイルをダウンロードし、解凍します。
                </p>
                <p className="mt-5 text-gray-600">
                  解凍したら、そのファイルをCドライブ直下に移し、フォルダ名を例えば「php7.2.4」といった具合に変えておきます。
                </p>
              </div>
              <div className="mt-10 text-gray-600">
                <h1 className="text-2xl font-bold">おわりに </h1>
                <hr/>
                <p className="mt-5 text-gray-600">
                  マルチスレッドとは、処理において並行処理が発生するもののことです。
                  例えばサーバの場合マルチスレッドに対応していない場合、サーバにリクエストが複数同時に来た場合は、１つずつ対応することになります。それに対してマルチスレッドの場合は並行して処理することができます。
                </p>
                <p className="mt-5 text-gray-600">そのため、今回はThread
                  Safeの方を選択しました。なお、32,64bitの調べかたは環境変数の節を参照してください。</p>
              </div>

              <div className="mt-10">
                <h1 className="text-2xl font-bold">コメント </h1>
                <hr/>
                <p className="mt-5 text-gray-600">この記事にコメントはありません。</p>
                <div className="bg-gray-100 py-20 mt-5">
                  <h4 className="text-center lg:text-2xl text-lg font-bold text-gray-600">いいね以上の気持ちはコメントで</h4>
                  <div className="flex justify-center items-center gap-10 mt-7">
                    <Button radius="none" className="lg:w-[200px] lg:h-[50px] text-lg font-bold text-white bg-warning-400">
                      ログイン
                    </Button>
                    <Button radius="none" className="lg:w-[200px] lg:h-[50px] text-lg font-bold text-gray-600">
                      新規登録
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>


          {/* Right Sidebar */}
          {/*<div className="hidden lg:block p-5 rounded-r-[5px]">*/}
          {/*  <h2 className="text-xl font-bold mb-4">Follow Us</h2>*/}
          {/*  <ul className="space-y-3">*/}
          {/*    <li><a href="#" className="block p-2 bg-blue-500 text-white rounded">Facebook</a></li>*/}
          {/*    <li><a href="#" className="block p-2 bg-blue-400 text-white rounded">Twitter</a></li>*/}
          {/*    <li><a href="#" className="block p-2 bg-pink-500 text-white rounded">Instagram</a></li>*/}
          {/*    <li><a href="#" className="block p-2 bg-red-600 text-white rounded">YouTube</a></li>*/}
          {/*  </ul>*/}
          {/*</div>*/}
        </div>
      </div>
    </>
  )
}
