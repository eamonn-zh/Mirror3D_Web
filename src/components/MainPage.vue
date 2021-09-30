<template>
  <v-container style="max-width: 950px; font-family: 'Source Sans Pro', Helvetica, Arial, sans-serif;">
    <p style="text-align: center"
       class="mt-15 mb-12 text-lg-h4 text-md-h4 text-sm-h5 text-h5 text-xl-h4 font-weight-bold">Mirror3D: Depth
      Refinement for Mirror
      Surfaces</p>
    <v-row justify="space-around" class="px-8">
      <v-col cols="auto">
        <a target="_blank" href="https://christinatan0704.github.io/mysite" style="font-size: 21px">Jiaqi
          Tan</a>
      </v-col>
      <v-col cols="auto">
        <a target="_blank" href="https://lewislinn.github.io" style="font-size: 21px">Weijie Lin</a>
      </v-col>
      <v-col cols="auto">
        <a target="_blank" href="https://angelxuanchang.github.io/" style="font-size: 21px">Angel X.
          Chang</a>
      </v-col>
      <v-col cols="auto">
        <a target="_blank" href="https://msavva.github.io/" style="font-size: 21px">Manolis Savva</a>
      </v-col>
    </v-row>
    <p style="text-align: center; font-size: 22px" class="my-7">Simon Fraser University</p>
    <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/overview.jpg"></v-img>
    <p class="my-6" style="font-size: 16px; font-weight: 300; line-height: 1.5">
      We present the task of 3D mirror plane prediction and depth refinement. First, we annotate
      several popular RGBD datasets
      (Matterport3D, ScanNet, NYUv2) with 3D mirror planes. Our benchmarks show that both existing
      RGBD dataset 'ground truth'
      raw depth data and state-of-the-art depth estimation and depth completion methods exhibit
      dramatic errors on mirror
      surfaces. We propose an architecture for 3D mirror plane estimation that refines depth estimates
      and produces more
      reliable reconstructions (compare left and right depth and point cloud pairs from the NYUv2
      dataset).
    </p>

    <h2 class="font-weight-bold">Abstract</h2>
    <hr/>
    <p class="my-6" style="font-size: 16px; font-weight: 300; line-height: 1.5">
      Despite recent progress in depth sensing and 3D reconstruction, mirror surfaces are a
      significant source of errors. To
      address this problem, we create the Mirror3D dataset: a 3D mirror plane dataset based on
      three RGBD
      datasets (Matterpot3D, NYUv2, and ScanNet) containing 7,011 mirror instance masks and 3D
      planes. We then develop
      Mirror3DNet: a module that refines raw sensor depth or estimated depth to correct errors on
      mirror surfaces. Our key
      idea is to estimate the 3D mirror plane based on RGB input and surrounding depth context and
      use this estimate to
      directly regress mirror surface depth. Our experiments show that Mirror3DNet significantly
      mitigates errors from a
      variety of input depth data, including raw sensor depth and depth estimation or completion
      methods.
    </p>
    <h2 class="font-weight-bold">Project Video</h2>
    <hr/>
    <div class="aspect-ratio mt-3 mb-6">
      <iframe src="https://www.youtube.com/embed/XmrrK4JxF5Y"
              ref="youtube"
              style="border: 0;"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen></iframe>
    </div>

    <div class="d-flex flex-row align-center">
      <h2 class="font-weight-bold">Dataset Overview</h2>
      <v-spacer></v-spacer>
      <v-btn outlined small @click="$router.push('/vis')">
        Browse More
        <v-icon small>
          mdi-chevron-right
        </v-icon>
      </v-btn>
    </div>

    <hr/>
    <p class="my-6" style="font-size: 16px; font-weight: 300; line-height: 1.5">
      We provide 7,011 mirror instance masks and 3D plane annotation based on three popular RGBD
      datasets. To obtain the original datasets, please follow the instructions on their official
      website (link: <a href="https://niessner.github.io/Matterport/">Matterpot3D</a>, <a
        href="https://cs.nyu.edu/~silberman/datasets/nyu_depth_v2.html">NYUv2</a>, <a
        href="http://www.scan-net.org/">ScanNet</a>).
      <br>
      Here are the visualizations of our Mirror3D dataset. In each image pair, the mirror mask is
      shown as a transparent red on the RGB image,
      the mirror plane is in light blue on the point cloud, and erroneous depth points that are
      incorrectly behind the mirror plane in the raw depth are shaded in orange.
    </p>
    <h3 class="mb-3">NYUv2 Mirror</h3>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/1_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/1_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/2_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/2_2.gif"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/3_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/3_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/4_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/nyu/4_2.gif"></v-img>
      </v-col>
    </v-row>
    <h3 class="mb-3 mt-6">Matterport3D Mirror</h3>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/1_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/1_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/2_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/2_2.gif"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/3_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/3_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/4_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/m3d/4_2.gif"></v-img>
      </v-col>
    </v-row>
    <h3 class="mb-3 mt-6">ScanNet Mirror</h3>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/1_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/1_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/2_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/2_2.gif"></v-img>
      </v-col>
    </v-row>
    <v-row justify="center" align="center">
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/3_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/3_2.gif"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/4_1.png"></v-img>
      </v-col>
      <v-col cols="6" md="3" sm="3" lg="3" xl="3">
        <v-img src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/img/figure/scannet/4_2.gif"></v-img>
      </v-col>
    </v-row>
    <h2 class="font-weight-bold mt-4">Download</h2>
    <hr/>
    <!--    <v-row justify="space-around" class="my-5">-->
    <!--      <v-col cols="auto">-->
    <!--        <a href="https://github.com/3dlg-hcvc/mirror3d" style="font-size: 23px">[Source Code]</a>-->
    <!--      </v-col>-->
    <!--      <v-col cols="auto">-->
    <!--        <a href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/nyu.zip" style="font-size: 23px">[NYUv2-->
    <!--          Mirror]</a>-->
    <!--      </v-col>-->
    <!--      <v-col cols="auto">-->
    <!--        <a href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/mp3d.zip" style="font-size: 23px">[Matterport3D-->
    <!--          Mirror]</a>-->
    <!--      </v-col>-->
    <!--      <v-col cols="auto">-->
    <!--        <a href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/scannet.zip" style="font-size: 23px">[ScanNet-->
    <!--          Mirror]</a>-->
    <!--      </v-col>-->
    <!--    </v-row>-->
    <v-row justify="space-around" class="my-5">
      <v-col cols="12" md="3" sm="6" lg="3" xl="3">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 4 : 2">
            <div class="d-flex flex-row align-center pa-3">
              <v-icon size="48" color="#616161" class="mr-2">mdi-github</v-icon>
              <div>
                <p style="margin: 0; font-size: 15px; opacity: 0.9;">GitHub</p>
                <p style="margin: 0; font-size: 13px; opacity: 0.7">Stars: {{gitHubStars}}</p>
              </div>
            </div>

            <v-divider></v-divider>
            <v-btn block text color="#005cbf" style="text-decoration: none;" href="https://github.com/3dlg-hcvc/mirror3d">View Source Code</v-btn>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="3" sm="6" lg="3" xl="3">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 4 : 2">
            <div class="d-flex flex-row align-center pa-3">
              <v-icon size="50" class="mr-2">mdi-folder</v-icon>
              <div>
                <p style="margin: 0; font-size: 15px; opacity: 0.9;">NYUv2 Mirror</p>
                <p style="margin: 0; font-size: 13px; opacity: 0.7">Size: 8.5 MB</p>
              </div>
            </div>
            <v-divider></v-divider>
            <v-btn block text color="#005cbf" style="text-decoration: none;"
                   href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/nyu.zip">
              Download
            </v-btn>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="3" sm="6" lg="3" xl="3">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 4 : 2">
            <div class="d-flex flex-row align-center pa-3">
              <v-icon size="50" class="mr-2">mdi-folder</v-icon>
              <div>
                <p style="margin: 0; font-size: 15px; opacity: 0.9;">Matterport3D Mirror</p>
                <p style="margin: 0; font-size: 13px; opacity: 0.7">Size: 858 MB</p>
              </div>
            </div>
            <v-divider></v-divider>
            <v-btn block text color="#005cbf" style="text-decoration: none;"
                   href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/mp3d.zip">
              Download
            </v-btn>
          </v-card>
        </v-hover>
      </v-col>
      <v-col cols="12" md="3" sm="6" lg="3" xl="3">
        <v-hover v-slot:default="{ hover }">
          <v-card :elevation="hover ? 4 : 2">
            <div class="d-flex flex-row align-center pa-3">
              <v-icon size="50" class="mr-2">mdi-folder</v-icon>
              <div>
                <p style="margin: 0; font-size: 15px; opacity: 0.9;">ScanNet Mirror</p>
                <p style="margin: 0; font-size: 13px; opacity: 0.7">Size: 100.3 MB</p>
              </div>
            </div>
            <v-divider></v-divider>
            <v-btn block text color="#005cbf" style="text-decoration: none;"
                   href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/scannet.zip">
              Download
            </v-btn>
          </v-card>
        </v-hover>
      </v-col>
    </v-row>
    <h2 class="font-weight-bold">Paper and Bibtex</h2>
    <hr/>
    <v-row justify="center" align="center" class="my-5">
      <v-col cols="auto" sm="4" md="4" lg="4" xl="4">
        <div style="text-align: center" class="mr-8">
          <v-img class="mb-4"
                 src="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/mirror3d_paper_stack.jpeg"
                 max-width="230px"></v-img>
          <a style="font-size: 20px;" class="font-weight-bold"
             href="https://arxiv.org/pdf/2106.06629.pdf">[Paper]</a>
          <span style="color: #005cbf;" class="font-weight-bold mx-4"> | </span>
          <a style="font-size: 20px" class="font-weight-bold"
             href="https://aspis.cmpt.sfu.ca/projects/mirrors/mirror3d_zip_release/Mirror3D_CVPR_poster.pdf">[Poster]</a>
        </div>
      </v-col>
      <v-col cols="12" sm="8" md="8" lg="8" xl="8">
        <div>
          <span style="color: #005cbf; font-size: 20px" class="font-weight-bold">Bibtex</span>

          <v-sheet @mouseover="showCopyBtn = true;" @mouseleave="resetCopyBtn" class="pa-2 mt-3 mb-6" color="#eee"
                   rounded style="line-height: 1.4; font-size: 13px; font-family: monospace; font-weight: 300;">
            <v-tooltip top>
              <template v-slot:activator="{ on, attrs }">
                <v-btn v-show="showCopyBtn" @click="copyBibtex" v-bind="attrs" v-on="on" style="float: right" small
                       outlined :color=copyBtnColor>
                  <v-icon v-if="!copied" size="17" color="grey darken-1">mdi-content-paste</v-icon>
                  <v-icon v-else size="17" color="success">mdi-check</v-icon>
                </v-btn>
              </template>
              <span>{{ tooltipText }}</span>
            </v-tooltip>

            <div class="pa-4">
              <p style="margin: 0">@inproceedings{mirror3d2021tan,</p>
              <p style="margin: 0">author = {Tan, Jiaqi and Lin, Weijie and Chang, Angel X and Savva, Manolis},</p>
              <p style="margin: 0">title = {{ Mirror3D}: Depth Refinement for Mirror Surfaces},</p>
              <p style="margin: 0">booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern
                Recognition (CVPR)},</p>
              <p style="margin: 0">month = {June},</p>
              <p style="margin: 0">year = {2021}</p>
              <p style="margin: 0">}</p>
            </div>
          </v-sheet>

          <span style="color: #005cbf; font-size: 20px" class="font-weight-bold">Citation</span>
          <p>Jiaqi Tan, Weijie Lin, Angel X. Chang, Manolis Savva <b>Mirror3D: Depth Refinement for Mirror Surfaces </b>CVPR
            2021.</p>
        </div>
      </v-col>
    </v-row>
    <p style="font-size: 13px; color: #181819bd;" class="mb-6">*Note: compared to the camera-ready version, we fixed
      some dataset annotation errors and
      added some previously unannotated images to the dataset. Therefore, the quantitative and qualitative
      results have been updated to correspond to the latest version of the dataset. </p>
    <h2 class="font-weight-bold">Acknowledgements</h2>
    <hr/>
    <p class="my-6" style="font-size: 16px; font-weight: 300; line-height: 1.5">Many thanks to Yiming Zhang for help in
      developing annotation verification and visualization
      tools and the dataset website. We also thank Hanxiao Jiang, Yongsen Mao and Yiming Zhang for their help with
      dataset
      annotation. We thank Shitao Tang for helpful early conversations on the Mirror3DNet neural architecture used in
      our work.
      We are grateful to the anonymous reviewers for their helpful suggestions. This research was enabled in part by
      support provided provided by
      <a href="https://www.westgrid.ca/">WestGrid</a> and
      <a href="https://www.computecanada.ca/">Compute Canada</a>
      . Angel X. Chang is supported by a Canada CIFAR AI Chair, and Manolis Savva by a Canada Research Chair and NSERC
      Discovery Grant.
    </p>
    <p style="font-style: italic; font-size: 12px">
      Last updated: 2021-05-29
    </p>
  </v-container>
</template>

<script>
export default {
  name: "MainPage",
  data() {
    return {
      showCopyBtn: false,
      copied: false,
      copyBtnColor: "grey lighten-1",
      youtubeVideoHeight: 0,
      tooltipText: "Copy",
      gitHubStars: "N/A"
    }
  },
  methods: {
    getGitHubStars() {
      let that = this;
      this.$http.get('https://api.github.com/repos/3dlg-hcvc/mirror3d')
          .then(function (response) {
            that.gitHubStars = response.data.stargazers_count;
          })
    },
    resetCopyBtn() {
      this.showCopyBtn = false;
      this.copied = false;
      this.copyBtnColor = 'grey lighten-1';
      this.tooltipText = "Copy";
    },
    copyBibtex() {
      let that = this
      let bibtex = "@inproceedings{mirror3d2021tan,\n" +
          "author = {Tan, Jiaqi and Lin, Weijie and Chang, Angel X and Savva, Manolis},\n" +
          "title = {{Mirror3D}: Depth Refinement for Mirror Surfaces},\n" +
          "booktitle = {Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)},\n" +
          "month = {June},\n" +
          "year = {2021}\n" +
          "}"
      this.$copyText(bibtex).then(
          function () {
            that.copyBtnColor = "success"
            that.copied = true
            that.tooltipText = "Copied"
          }
      )
    },
  },
  mounted() {
    this.youtubeVideoHeight = this.$refs.youtube.clientWidth / 16 * 9
    this.getGitHubStars()
  },
}
</script>

<style scoped>

a {
  text-decoration: none;
  color: #005cbf;
}

a:hover {
  text-decoration: underline;
}

.aspect-ratio {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}

.aspect-ratio iframe {
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
}

h2 {
  font-family: 'Open Sans', Helvetica, Arial, sans-serif;
  margin: 2px 0;
}
</style>